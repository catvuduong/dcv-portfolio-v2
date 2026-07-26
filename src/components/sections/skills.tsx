import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/data/portfolio";
import { Monitor, Server, Database, Cloud } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Monitor className="h-5 w-5" />,
  Backend: <Server className="h-5 w-5" />,
  Database: <Database className="h-5 w-5" />,
  "DevOps & Cloud": <Cloud className="h-5 w-5" />,
};

export function Skills() {
  return (
    <section id="skills" className="bg-neutral-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="group rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50"
            >
              {/* Category Header */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700 transition-colors group-hover:bg-indigo-100">
                  {categoryIcons[category.name]}
                </div>
                <h3 className="font-semibold text-neutral-900">
                  {category.name}
                </h3>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="border border-neutral-200 bg-neutral-50 font-normal transition-colors group-hover:border-indigo-200 group-hover:bg-indigo-50"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
