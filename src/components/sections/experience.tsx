import { Separator } from "@/components/ui/separator";
import { experiences } from "@/data/portfolio";
import { Building2, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="bg-neutral-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Work Experience
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            A journey of growth, learning, and impactful contributions
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <div className="relative">
            {/* Timeline Line (Desktop) */}
            <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-indigo-200 via-indigo-300 to-indigo-200 lg:left-1/2 lg:-translate-x-px md:block" />

            {/* Experience Entries */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative lg:flex ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot - Purple */}
                  <div className="absolute left-0 top-6 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white bg-indigo-600 shadow-lg shadow-indigo-200 lg:left-1/2 lg:block">
                    <div className="absolute inset-0 animate-pulse rounded-full bg-indigo-400 opacity-75" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`relative lg:w-[calc(50%-2rem)] ${
                      index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                    }`}
                  >
                    <div className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-indigo-700 transition-colors">
                              {exp.title}
                            </h3>
                            <div className="mt-1 flex items-center gap-2 text-sm text-neutral-600">
                              <Building2 className="h-4 w-4 text-indigo-600" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center gap-1.5 text-sm text-neutral-500">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      <Separator className="my-4" />

                      {/* Responsibilities */}
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-neutral-600"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block lg:w-[calc(50%+2rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
