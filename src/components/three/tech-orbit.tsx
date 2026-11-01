"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
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

type Mode = "loading" | "3d" | "still" | "fallback";

const noSubscribe = () => () => {};
const clientMode = (): Mode => {
  if (!hasWebGL()) return "fallback";
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "still" : "3d";
};

/** 3D tech cloud for the hero. Falls back to the code window when WebGL is unavailable. */
export function TechOrbit() {
  const mode = useSyncExternalStore<Mode>(noSubscribe, clientMode, () => "loading");

  if (mode === "fallback") return <CodeEditorIllustration />;
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden="true">
      <div className="absolute inset-[12%] rounded-full bg-gradient-to-br from-indigo-300/40 via-violet-300/30 to-sky-200/30 blur-3xl" />
      {mode !== "loading" && <Scene still={mode === "still"} />}
    </div>
  );
}
