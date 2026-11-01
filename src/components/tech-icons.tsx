import type { ReactNode } from "react";
import { Cloud, Sparkles, Webhook, Code2 } from "lucide-react";
import {
  SiReact, SiNextdotjs, SiThreedotjs, SiTypescript, SiJavascript, SiHtml5, SiNodedotjs, SiExpress,
  SiMongodb, SiNestjs, SiDotnet, SiSharp, SiPostgresql, SiDocker, SiGithubactions, SiGit, SiVite,
  SiWebpack, SiFigma, SiCursor, SiClaude,
} from "react-icons/si";

type Entry = { icon: ReactNode; color: string };

const cls = "h-4 w-4";

/** Icons for the names used in the skills list. Names without a brand icon fall back to a generic glyph. */
const icons: Record<string, Entry> = {
  ReactJS: { icon: <SiReact className={cls} />, color: "#0ea5e9" },
  React: { icon: <SiReact className={cls} />, color: "#0ea5e9" },
  "Next.js": { icon: <SiNextdotjs className={cls} />, color: "#64748b" },
  "Three.js": { icon: <SiThreedotjs className={cls} />, color: "#64748b" },
  TypeScript: { icon: <SiTypescript className={cls} />, color: "#3178c6" },
  JavaScript: { icon: <SiJavascript className={cls} />, color: "#ca8a04" },
  "HTML5/CSS3": { icon: <SiHtml5 className={cls} />, color: "#e34f26" },
  "Node.js": { icon: <SiNodedotjs className={cls} />, color: "#16a34a" },
  Express: { icon: <SiExpress className={cls} />, color: "#6b7280" },
  MongoDB: { icon: <SiMongodb className={cls} />, color: "#16a34a" },
  NestJS: { icon: <SiNestjs className={cls} />, color: "#e0234e" },
  ".NET": { icon: <SiDotnet className={cls} />, color: "#7c3aed" },
  ".NET / ASP.NET Core": { icon: <SiDotnet className={cls} />, color: "#7c3aed" },
  "C#": { icon: <SiSharp className={cls} />, color: "#7c3aed" },
  PostgreSQL: { icon: <SiPostgresql className={cls} />, color: "#336791" },
  "RESTful API": { icon: <Webhook className={cls} />, color: "#6366f1" },
  Docker: { icon: <SiDocker className={cls} />, color: "#2496ed" },
  AWS: { icon: <Cloud className={cls} />, color: "#f59e0b" },
  "AWS (EC2, S3, CloudFront)": { icon: <Cloud className={cls} />, color: "#f59e0b" },
  "CI/CD": { icon: <SiGithubactions className={cls} />, color: "#2563eb" },
  "Git / GitHub": { icon: <SiGit className={cls} />, color: "#f05032" },
  Vite: { icon: <SiVite className={cls} />, color: "#8b5cf6" },
  Webpack: { icon: <SiWebpack className={cls} />, color: "#2563eb" },
  "VS Code / Cursor": { icon: <SiCursor className={cls} />, color: "#6b7280" },
  Figma: { icon: <SiFigma className={cls} />, color: "#f24e1e" },
  "Claude Code": { icon: <SiClaude className={cls} />, color: "#d97757" },
  "AI-assisted development": { icon: <Sparkles className={cls} />, color: "#d97757" },
};

export function techIcon(name: string): Entry {
  return icons[name] ?? { icon: <Code2 className={cls} />, color: "#6b7280" };
}
