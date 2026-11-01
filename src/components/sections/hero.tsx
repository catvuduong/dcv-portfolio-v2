"use client";

import { Button } from "@/components/ui/button";
import { TechOrbit } from "@/components/three/tech-orbit";
import { personalInfo, projects } from "@/data/portfolio";
import { ArrowRight, MessageCircle } from "lucide-react";

// Numbers come from the data file, so they never drift from what the page actually lists.
const stats = [
  { value: "4+", label: "Years of experience" },
  { value: String(projects.length), label: "Projects shipped" },
  { value: String(projects.filter((p) => p.liveUrl).length), label: "Live demos" },
  { value: String(new Set(projects.flatMap((p) => p.techStack)).size), label: "Technologies used" },
];

export function Hero() {
  return (
    <section className="hero-gradient py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Column - Text Content */}
          <div className="mx-auto max-w-xl lg:mx-0">
            {/* Available badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
              </span>
              <span className="text-sm font-medium text-white">
                Full-Stack Developer · 3D & Web
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              {personalInfo.headline}
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg leading-relaxed text-neutral-600 sm:text-xl">
              {personalInfo.subHeadline}
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-indigo-900 px-8 text-white shadow-lg shadow-indigo-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-800 hover:shadow-xl hover:shadow-indigo-900/30"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Contact me to get my CV
                  <MessageCircle className="h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="px-6 text-indigo-900 hover:bg-indigo-50"
                asChild
              >
                <a href="#projects" className="flex items-center gap-2">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Stats */}
            <dl className="mt-12 grid grid-cols-2 items-start gap-x-8 gap-y-8 border-t border-neutral-200 pt-8 sm:grid-cols-4">
              {stats.map((stat) => (
                // number on top, label below: every number shares a baseline even when a label wraps to two lines
                <div key={stat.label} className="flex flex-col-reverse justify-end gap-1">
                  <dt className="text-sm leading-snug text-neutral-500">{stat.label}</dt>
                  <dd className="text-3xl font-bold leading-none tracking-tight text-neutral-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right Column - 3D tech orbit (desktop only; falls back to the code window without WebGL) */}
          <div className="hidden lg:flex justify-center">
            <TechOrbit />
          </div>
        </div>
      </div>
    </section>
  );
}
