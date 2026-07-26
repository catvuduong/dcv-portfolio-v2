import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";
import { ArrowRight, Download, Briefcase, Users, Code2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-neutral-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-neutral-50 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Tagline */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
              <Code2 className="h-3 w-3" />
              Available for opportunities
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            {personalInfo.headline}
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg leading-8 text-neutral-600 sm:text-xl">
            {personalInfo.subHeadline}
          </p>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
                <Briefcase className="h-5 w-5 text-neutral-700" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-semibold text-neutral-900">4+</p>
                <p className="text-sm text-neutral-500">Years Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
                <Users className="h-5 w-5 text-neutral-700" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-semibold text-neutral-900">50+</p>
                <p className="text-sm text-neutral-500">Projects Delivered</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
                <Code2 className="h-5 w-5 text-neutral-700" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-semibold text-neutral-900">15+</p>
                <p className="text-sm text-neutral-500">Technologies</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto">
              <a href="#projects" className="flex items-center gap-2">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <a
                href={personalInfo.resumeUrl}
                download
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
