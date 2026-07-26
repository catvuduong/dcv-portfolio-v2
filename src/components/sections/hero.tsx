"use client";

import { Button } from "@/components/ui/button";
import { CodeEditorIllustration } from "@/components/ui/code-editor-illustration";
import { personalInfo } from "@/data/portfolio";
import { ArrowRight, Download } from "lucide-react";

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
                Available for new opportunities
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
                className="bg-indigo-900 text-white hover:bg-indigo-800 px-6 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-200"
              >
                <a href={personalInfo.resumeUrl} download className="flex items-center gap-2">
                  Download Resume
                  <Download className="h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-indigo-900/30 text-indigo-900 hover:bg-indigo-50 hover:border-indigo-900/50 px-6"
                asChild
              >
                <a href="#projects" className="flex items-center gap-2">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Code Editor Illustration */}
          <div className="hidden lg:flex justify-center">
            <CodeEditorIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
