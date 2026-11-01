import Image from "next/image";
import { about, personalInfo } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-14">
          {/* Small portrait with the name beneath it */}
          <div className="flex items-center gap-4 md:flex-col md:items-start">
            <Image
              src="/avatar.webp"
              alt={`Portrait of ${personalInfo.name}`}
              width={112}
              height={112}
              className="h-24 w-24 rounded-2xl object-cover shadow-lg shadow-indigo-200/50 ring-4 ring-white sm:h-28 sm:w-28"
            />
            <div>
              <p className="text-lg font-semibold text-neutral-900">{personalInfo.name}</p>
              <p className="text-sm text-neutral-500">{personalInfo.title}</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">About me</h2>
            <div className="mt-5 max-w-2xl space-y-4 text-lg leading-relaxed text-neutral-600">
              {about.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
            <dl className="mt-8 grid max-w-2xl grid-cols-1 gap-4 border-t border-neutral-200 pt-6 sm:grid-cols-2">
              {about.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs font-medium uppercase tracking-wider text-neutral-500">{fact.label}</dt>
                  <dd className="mt-1 text-neutral-900">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
