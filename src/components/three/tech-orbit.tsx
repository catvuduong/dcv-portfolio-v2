"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, useSyncExternalStore } from "react";
import { CodeEditorIllustration } from "@/components/ui/code-editor-illustration";

// three.js is only fetched in the browser, after the first paint of the hero text.
const Scene = dynamic(() => import("./tech-orbit-scene"), { ssr: false });

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

type Mode = "loading" | "off" | "3d" | "still" | "fallback";

// The scene only matters on wide screens (the column is hidden below lg), so phones never download or run three.js.
const wide = "(min-width: 1024px)";
const subscribe = (callback: () => void) => {
  const query = window.matchMedia(wide);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};
const clientMode = (): Mode => {
  if (!window.matchMedia(wide).matches) return "off";
  if (!hasWebGL()) return "fallback";
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "still" : "3d";
};

/** 3D tech cloud for the hero. Falls back to the code window when WebGL is unavailable. */
export function TechOrbit() {
  const mode = useSyncExternalStore<Mode>(subscribe, clientMode, () => "loading");
  const [idle, setIdle] = useState(false);

  // Start the heavy scene after the page has settled, so it never competes with the first paint
  useEffect(() => {
    const start = () => setIdle(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(start, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(start, 1200);
    return () => clearTimeout(id);
  }, []);

  if (mode === "off") return null;
  if (mode === "fallback") return <CodeEditorIllustration />;
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden="true">
      <div className="absolute inset-[12%] rounded-full bg-gradient-to-br from-indigo-300/40 via-violet-300/30 to-sky-200/30 blur-3xl" />
      {mode !== "loading" && idle && <Scene still={mode === "still"} />}
    </div>
  );
}
