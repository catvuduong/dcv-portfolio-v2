import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";
import { ExternalLink, ArrowRight } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiDocker,
  SiPython,
} from "react-icons/si";

// AWS Icon as custom SVG
function AwsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.296.064-.583.16-.863.279a2.09 2.09 0 01-.263.096.468.468 0 01-.127.031.21.21 0 01-.135-.048c-.048-.032-.064-.096-.064-.184v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.191c.279-.144.614-.264 1.005-.36a4.84 4.84 0 011.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51a1.2 1.2 0 00.32-.398c.046-.08.063-.16.063-.24a.47.47 0 00-.048-.183.296.296 0 00-.135-.135l-.336-.2-.399-.2c-.279-.128-.583-.192-.895-.192-.496 0-.894.144-1.188.44-.295.295-.439.678-.439 1.142 0 .279.072.535.2.767.136.24.32.426.559.566.239.144.535.208.886.208zm6.41.862c-.144 0-.24-.024-.304-.08-.057-.048-.088-.16-.088-.335v-.655c-.631.735-1.474 1.1-2.531 1.1-.335 0-.63-.04-.878-.12-.248-.072-.463-.2-.639-.36-.176-.16-.312-.36-.4-.584a1.937 1.937 0 01-.144-.767c0-.375.088-.71.256-1.005.176-.295.415-.535.718-.726.303-.184.655-.311 1.05-.375.399-.064.814-.096 1.246-.096.55 0 .966.048 1.245.144.279.096.47.248.574.448.103.2.152.47.152.814v.575h-.854v.32c0 .296-.032.52-.096.655-.063.136-.2.2-.414.2zm-1.966-.694c.095 0 .224-.024.384-.064.16-.04.312-.12.448-.224.136-.112.24-.263.32-.455a1.35 1.35 0 00.12-.639c0-.287-.056-.535-.168-.734-.104-.2-.255-.358-.448-.472-.191-.111-.415-.167-.67-.167-.16 0-.32.024-.479.08-.16.048-.312.12-.456.208a1.22 1.22 0 00-.336.344 1.23 1.23 0 00-.2.44 1.79 1.79 0 00-.064.519c0 .207.024.39.064.559.048.16.12.303.224.415.104.12.231.208.375.279.144.063.303.095.487.095zm6.41-2.49c.144-.032.32-.056.519-.08.199-.024.415-.04.647-.04.615 0 1.058.095 1.325.28.271.184.403.44.403.774 0 .296-.12.527-.367.694-.239.168-.583.248-1.029.248h-.64v-.471c0-.095.008-.16.032-.2.024-.047.088-.071.2-.071h.455c.647 0 1.077-.12 1.3-.36.22-.248.336-.583.336-1.006 0-.335-.072-.623-.216-.87-.144-.24-.336-.415-.583-.527-.248-.112-.583-.167-1.005-.167-.336 0-.615.032-.854.096a4.53 4.53 0 00-.607.223v-.559c0-.607-.128-1.03-.376-1.277-.255-.248-.687-.367-1.3-.367-.279 0-.567.031-.862.103-.296.064-.583.16-.863.279-.128.056-.224.12-.28.183a.265.265 0 00-.064.12c0 .08.048.16.144.24l.359.279c.12.088.2.128.24.128.048 0 .096-.016.16-.056.063-.04.12-.088.168-.135.335-.311.71-.463 1.133-.463.455 0 .79.128 1.006.383.215.256.32.63.32 1.125v2.398zm-4.14 2.49c-.144 0-.24-.024-.304-.08-.057-.048-.088-.16-.088-.335v-.655c-.631.735-1.474 1.1-2.531 1.1-.335 0-.63-.04-.878-.12-.248-.072-.463-.2-.639-.36-.176-.16-.312-.36-.4-.584a1.937 1.937 0 01-.144-.767c0-.375.088-.71.256-1.005.176-.295.415-.535.718-.726.303-.184.655-.311 1.05-.375.399-.064.814-.096 1.246-.096.55 0 .966.048 1.245.144.279.096.47.248.574.448.103.2.152.47.152.814v.575h-.854v.32c0 .296-.032.52-.096.655-.063.136-.2.2-.414.2zm-1.966-.694c.095 0 .224-.024.384-.064.16-.04.312-.12.448-.224.136-.112.24-.263.32-.455a1.35 1.35 0 00.12-.639c0-.287-.056-.535-.168-.734-.104-.2-.255-.358-.448-.472-.191-.111-.415-.167-.67-.167-.16 0-.32.024-.479.08-.16.048-.312.12-.456.208a1.22 1.22 0 00-.336.344 1.23 1.23 0 00-.2.44 1.79 1.79 0 00-.064.519c0 .207.024.39.064.559.048.16.12.303.224.415.104.12.231.208.375.279.144.063.303.095.487.095zm9.86-2.106c.144.144.32.288.527.44.215.152.455.28.735.392.279.104.583.184.918.24.335.048.695.08 1.078.08.615 0 1.16-.088 1.628-.256a3.19 3.19 0 001.196-.758c.335-.335.583-.734.75-1.213.159-.479.24-1.026.24-1.653 0-.607-.08-1.158-.24-1.653a3.35 3.35 0 00-.75-1.213 3.36 3.36 0 00-1.196-.767 4.19 4.19 0 00-1.629-.256c-.383 0-.735.024-1.078.08a4.92 4.92 0 00-.918.24 4.707 4.707 0 00-.735.392 5.94 5.94 0 00-.527.44 4.07 4.07 0 00-.415.52l.056.064.575-.64c.087.072.184.152.287.248z"/>
    </svg>
  );
}

// Tech stack icon mapping
const techIcons: Record<string, React.ReactNode> = {
  "React": <SiReact className="h-4 w-4" />,
  "Next.js": <SiNextdotjs className="h-4 w-4" />,
  "TypeScript": <SiTypescript className="h-4 w-4" />,
  "Node.js": <SiNodedotjs className="h-4 w-4" />,
  "PostgreSQL": <SiPostgresql className="h-4 w-4" />,
  "MongoDB": <SiMongodb className="h-4 w-4" />,
  "AWS": <AwsIcon className="h-4 w-4" />,
  "Docker": <SiDocker className="h-4 w-4" />,
  "Python": <SiPython className="h-4 w-4" />,
};

// Tech stack colors
const techColors: Record<string, string> = {
  "React": "text-cyan-500",
  "Next.js": "text-neutral-900",
  "TypeScript": "text-blue-500",
  "Node.js": "text-green-600",
  "PostgreSQL": "text-blue-600",
  "MongoDB": "text-green-500",
  "AWS": "text-orange-500",
  "Docker": "text-blue-400",
  "Python": "text-yellow-500",
};

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Solutions that solve real problems with modern technology
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group flex flex-col overflow-hidden border-neutral-200 transition-all duration-300 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-indigo-50 via-neutral-50 to-violet-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm border border-indigo-100">
                    <svg
                      className="h-8 w-8 text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-indigo-100/50" />
              </div>

              <CardHeader>
                <CardTitle className="group-hover:text-indigo-700 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                {/* Problem/Solution */}
                <div className="space-y-2 text-sm text-neutral-600">
                  <p>
                    <span className="font-medium text-neutral-900">Challenge:</span>{" "}
                    {project.problem}
                  </p>
                  <p>
                    <span className="font-medium text-neutral-900">Solution:</span>{" "}
                    {project.solution}
                  </p>
                </div>

                {/* Tech Stack with Icons */}
                <div className="mt-4">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-500">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-neutral-200 bg-neutral-50 text-xs"
                      >
                        <span className={techColors[tech] || "text-neutral-500"}>
                          {techIcons[tech]}
                        </span>
                        <span className="ml-1.5">{tech}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="gap-2 border-t border-neutral-100 pt-4">
                {project.liveUrl && (
                  <Button variant="outline" size="sm" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" size="sm" className="border-neutral-200 hover:bg-neutral-50" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5"
                    >
                      <GithubIcon />
                      GitHub
                    </a>
                  </Button>
                )}
                <div className="flex-1" />
                <Button variant="ghost" size="sm" className="text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50">
                  Details
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-300" asChild>
            <a
              href={projects[0]?.githubUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View All Projects on GitHub
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
