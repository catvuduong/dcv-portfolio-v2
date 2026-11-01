import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { personalInfo, projects } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { techIcon } from "@/components/tech-icons";

type Props = { params: { id: string } };

export function generateStaticParams() {
  return Object.keys(caseStudies).map((id) => ({ id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.id === params.id);
  const study = caseStudies[params.id];
  if (!project || !study) return {};
  return {
    title: `${project.title} case study | ${personalInfo.name}`,
    description: study.tagline,
    openGraph: { title: `${project.title} case study`, description: study.tagline, images: [project.image ?? "/og.png"] },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);
  const study = caseStudies[params.id];
  if (!project || !study) notFound();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-indigo-700">
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 pb-24 pt-12 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-wider text-indigo-600">{project.category} · Case study</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">{project.title}</h1>
        <p className="mt-3 text-xl text-neutral-600">{study.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <Button className="bg-indigo-900 text-white hover:bg-indigo-800" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Live demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" className="border-neutral-200" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                View source on GitHub
              </a>
            </Button>
          )}
        </div>

        {project.image && (
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-neutral-200 shadow-xl shadow-indigo-100/50">
            <Image src={project.image} alt={`${project.title} preview`} fill priority sizes="(min-width: 896px) 896px, 100vw" className="object-cover object-top" />
          </div>
        )}

        <section className="mt-14 grid gap-10 md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900">Overview</h2>
            <p className="mt-3 text-lg leading-relaxed text-neutral-600">{study.overview}</p>
          </div>
          <dl className="space-y-5 text-sm">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-neutral-500">Role</dt>
              <dd className="mt-1 text-neutral-900">{study.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-neutral-500">Tech stack</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="outline" className="border-neutral-200 bg-neutral-50 text-xs">
                    <span style={{ color: techIcon(tech).color }} className="mr-1.5 inline-flex">
                      {techIcon(tech).icon}
                    </span>
                    {tech}
                  </Badge>
                ))}
              </dd>
            </div>
          </dl>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-neutral-900">What it does</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {study.features.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-neutral-200 bg-white p-5">
                <h3 className="font-semibold text-neutral-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 space-y-6">
          {study.shots.map((src, i) => (
            <div key={src} className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-neutral-200">
              <Image src={src} alt={`${project.title} screenshot ${i + 1}`} fill sizes="(min-width: 896px) 896px, 100vw" className="object-cover object-top" />
            </div>
          ))}
        </section>

        <section className="mt-14 grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900">Under the hood</h2>
            <ul className="mt-4 space-y-2 text-neutral-600">
              {study.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-indigo-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900">What I learned</h2>
            <ul className="mt-4 space-y-2 text-neutral-600">
              {study.learned.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-violet-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
