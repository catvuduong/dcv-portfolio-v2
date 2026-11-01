import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vuduong-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: personalInfo.summary,
  keywords: [
    "Full-Stack Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.summary,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${personalInfo.name}, ${personalInfo.title}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.summary,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Apply the saved (or system) theme before first paint so the page never flashes the wrong colours */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("portfolio-theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen bg-white text-neutral-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
