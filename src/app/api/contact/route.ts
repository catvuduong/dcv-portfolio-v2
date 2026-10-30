import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { personalInfo } from "@/data/portfolio";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// A real person needs a few seconds to fill the form; bots post instantly or replay very old pages.
const MIN_FILL_MS = 3_000;
const MAX_AGE_MS = 2 * 60 * 60 * 1000;
const PER_IP = { max: 3, windowMs: 10 * 60 * 1000 };
const GLOBAL = { max: 30, windowMs: 60 * 60 * 1000 };
const MAX_LINKS = 2;

// Best effort: serverless instances do not share memory, so this only slows down bursts hitting one instance.
const hitsByIp = new Map<string, number[]>();
let globalHits: number[] = [];

const secret = () => process.env.CONTACT_SECRET || process.env.RESEND_API_KEY || "";
const sign = (value: string) => createHmac("sha256", secret()).update(value).digest("base64url");

function verifyToken(token: unknown): boolean {
  if (typeof token !== "string") return false;
  const [issued, sig] = token.split(".");
  const age = Date.now() - Number(issued);
  if (!issued || !sig || !Number.isFinite(age) || age < MIN_FILL_MS || age > MAX_AGE_MS) return false;
  const want = Buffer.from(sign(issued));
  const got = Buffer.from(sig);
  return want.length === got.length && timingSafeEqual(want, got);
}

function tooMany(ip: string): boolean {
  const now = Date.now();
  const mine = (hitsByIp.get(ip) ?? []).filter((t) => now - t < PER_IP.windowMs);
  globalHits = globalHits.filter((t) => now - t < GLOBAL.windowMs);
  if (mine.length >= PER_IP.max || globalHits.length >= GLOBAL.max) return true;
  mine.push(now);
  globalHits.push(now);
  hitsByIp.set(ip, mine);
  if (hitsByIp.size > 5_000) hitsByIp.clear();
  return false;
}

const UNAVAILABLE = `The contact form is temporarily unavailable. Please email me at ${personalInfo.email}.`;
const fail = (error: string, status: number) => NextResponse.json({ error }, { status });

/** Hands the browser a signed timestamp; the form must come back with it, and not too fast. */
export async function GET() {
  if (!secret()) return fail(UNAVAILABLE, 503);
  const issued = String(Date.now());
  return NextResponse.json({ token: `${issued}.${sign(issued)}` });
}

export async function POST(request: Request) {
  if (!secret() || !process.env.RESEND_API_KEY) return fail(UNAVAILABLE, 503);

  // Only accept posts coming from this site's own pages.
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host || new URL(origin).host !== host) return fail("Forbidden.", 403);

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return fail("Invalid request.", 400);
  }

  // Honeypot: the field is hidden from people. Pretend it worked so bots do not learn anything.
  if (typeof body.website === "string" && body.website.trim() !== "") return NextResponse.json({ ok: true });

  if (!verifyToken(body.token)) return fail("Please wait a few seconds, reload the page and try again.", 400);

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const links = (s: string) => (s.match(/https?:\/\/|www\./gi) ?? []).length;

  if (name.length < 1 || name.length > 100 || /[\r\n<>]/.test(name) || links(name) > 0) return fail("Please enter a valid name.", 400);
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return fail("Please enter a valid email address.", 400);
  if (message.length < 10 || message.length > 2000) return fail("Your message must be between 10 and 2000 characters.", 400);
  if (links(message) > MAX_LINKS) return fail(`Please include at most ${MAX_LINKS} links.`, 400);

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (tooMany(ip)) return fail("Too many messages, please try again later.", 429);

  const res = await fetch(process.env.RESEND_API_URL || "https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO || personalInfo.email],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
  }).catch(() => null);

  if (!res || !res.ok) {
    console.error("contact: email provider rejected the message", res?.status);
    return fail(`Sorry, your message could not be sent. Please email me at ${personalInfo.email}.`, 502);
  }
  return NextResponse.json({ ok: true });
}
