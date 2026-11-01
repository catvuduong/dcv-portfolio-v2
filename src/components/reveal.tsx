"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Fades and lifts its children in when they scroll into view. Visible by default, so no JS or reduced motion means no hidden content. */
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"visible" | "hidden" | "shown">("visible");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return; // already on screen: leave it
    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.02 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const motion =
    state === "hidden" ? "translate-y-6 opacity-0" : state === "shown" ? "translate-y-0 opacity-100" : "";
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${motion} ${className}`}>
      {children}
    </div>
  );
}
