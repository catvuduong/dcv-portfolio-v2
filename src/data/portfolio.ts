export const personalInfo = {
  name: "Vu",
  title: "Full-Stack Engineer",
  headline: "Full-Stack Engineer building scalable web applications.",
  subHeadline:
    "4+ years of experience crafting performant frontends and resilient backend architectures. Specializing in React, TypeScript, Node.js, and AWS.",
  email: "contact@example.com",
  linkedin: "https://linkedin.com/in/nguyenvana",
  github: "https://github.com/nguyenvana",
  resumeUrl: "/resume.pdf",
};

export type Skill = {
  name: string;
  level?: "expert" | "proficient" | "familiar";
};

export type SkillCategory = {
  name: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "ReactJS", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "TypeScript", level: "proficient" },
      { name: "HTML5/CSS3", level: "expert" },
      { name: "Tailwind CSS", level: "expert" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: "expert" },
      { name: "Express", level: "proficient" },
      { name: "NestJS", level: "proficient" },
      { name: "RESTful API", level: "expert" },
      { name: "GraphQL", level: "familiar" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "PostgreSQL", level: "proficient" },
      { name: "MongoDB", level: "proficient" },
      { name: "Redis", level: "familiar" },
      { name: "Prisma ORM", level: "proficient" },
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "AWS (EC2, S3, RDS, CloudFront)", level: "proficient" },
      { name: "Docker", level: "proficient" },
      { name: "CI/CD", level: "proficient" },
      { name: "GitHub Actions", level: "proficient" },
      { name: "Linux", level: "proficient" },
    ],
  },
];

export const projectCategories = [
  "3D & Creative",
  "Finance",
  "Productivity",
  "E-Commerce",
  "Data & Analytics",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  id: string;
  category: ProjectCategory;
  title: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "neon-city-flythrough",
    category: "3D & Creative",
    title: "Neon City Flythrough",
    description:
      "A scroll-driven cyberpunk night city you fly through in the browser, with neon signs, fog, rain, and a wet reflective road.",
    problem:
      "A scroll-driven 3D scene needed to look striking on first load while staying smooth on a laptop integrated GPU and on mobile.",
    solution:
      "Built with React Three Fiber, drei, postprocessing, and three, using an instanced procedural city, a CatmullRomCurve3 camera path driven by ScrollControls, bloom and vignette post-processing, and a reduce-effects toggle for weaker hardware.",
    techStack: ["Next.js", "TypeScript"],
    liveUrl: "https://neon-city-flythrough-web.vercel.app",
    githubUrl: "https://github.com/catvuduong/neon-city-flythrough",
    image: "/projects/neon-city-flythrough.jpg",
  },
  {
    id: "galaxy-explorer",
    category: "3D & Creative",
    title: "Galaxy Explorer",
    description:
      "An immersive 3D spiral galaxy you can explore in the browser, with glowing planets to fly to and a control panel to tune the scene.",
    problem:
      "Presenting a large, animated 3D particle galaxy interactively in the browser needed a rendering setup that stays smooth and works across screen sizes.",
    solution:
      "Built the scene with React Three Fiber, drei, and postprocessing, using a multi-arm particle spiral with bloom, mouse-parallax camera, planet info cards with fly-to navigation, and a panel for arms, spin, colours, and speed.",
    techStack: ["Next.js", "TypeScript"],
    liveUrl: "https://galaxy-explorer-web.vercel.app",
    githubUrl: "https://github.com/catvuduong/galaxy-explorer",
    image: "/projects/galaxy-explorer.jpg",
  },
  {
    id: "expense-tracker",
    category: "Finance",
    title: "Expense Tracker",
    description:
      "A fullstack expense tracker for recording spending and reviewing it by month and category.",
    problem:
      "Recording expenses and seeing monthly spending by category needed a structured data store and an API behind a web interface.",
    solution:
      "Built a NestJS API on PostgreSQL through the existing DbService, paired with a Next.js frontend, and included unit and e2e test setups in the repo.",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    liveUrl: "https://expense-tracker-web-7e90.vercel.app",
    githubUrl: "https://github.com/catvuduong/expense-tracker",
    image: "/projects/expense-tracker.jpg",
  },
  {
    id: "todo-app",
    category: "Productivity",
    title: "Todo App",
    description:
      "A polished, responsive todo app for adding, completing, editing, and filtering tasks, with changes saved in the browser.",
    problem:
      "Keeping a simple task list across page reloads needed a clean, lightweight way to store todos without a backend.",
    solution:
      "Built the app in Next.js and TypeScript with add, complete, edit, and delete actions, All/Active/Done filters, a remaining-items counter, clear-completed, and localStorage persistence.",
    techStack: ["Next.js", "TypeScript"],
    liveUrl: "https://todo-app-web-liart.vercel.app",
    githubUrl: "https://github.com/catvuduong/todo-app",
    image: "/projects/todo-app.jpg",
  },
  {
    id: "1",
    category: "E-Commerce",
    title: "E-Commerce Platform",
    description:
      "A high-performance online marketplace handling thousands of concurrent users with real-time inventory management.",
    problem:
      "Traditional e-commerce platforms struggled with inventory sync issues during peak traffic, leading to overselling and customer dissatisfaction.",
    solution:
      "Built a scalable microservices architecture with real-time WebSocket updates and optimized database queries, reducing latency by 60%.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/example/ecommerce",
  },
  {
    id: "2",
    category: "Productivity",
    title: "Project Management SaaS",
    description:
      "A comprehensive project management tool with real-time collaboration, designed for remote teams.",
    problem:
      "Remote teams lacked a unified platform for tracking projects, communicating, and managing resources efficiently across different time zones.",
    solution:
      "Developed a feature-rich application with real-time updates, video conferencing integration, and automated workflow tools.",
    techStack: ["React", "TypeScript", "NestJS", "MongoDB", "Docker"],
    liveUrl: "https://example-pm.com",
    githubUrl: "https://github.com/example/project-manager",
  },
  {
    id: "3",
    category: "Data & Analytics",
    title: "Analytics Dashboard",
    description:
      "A business intelligence platform that transforms complex data into actionable insights with beautiful visualizations.",
    problem:
      "Businesses struggled to make sense of scattered data across multiple sources, making strategic decisions time-consuming and error-prone.",
    solution:
      "Created an intuitive dashboard with automated data pipelines, customizable reports, and AI-powered trend predictions.",
    techStack: ["Next.js", "Python", "PostgreSQL", "D3.js", "AWS"],
    liveUrl: "https://example-analytics.com",
    githubUrl: "https://github.com/example/analytics-dashboard",
  },
];

export type Experience = {
  id: string;
  company: string;
  title: string;
  duration: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "TechCorp Solutions",
    title: "Senior Full-Stack Engineer",
    duration: "Jan 2023 - Present",
    startDate: "2023-01",
    endDate: "Present",
    responsibilities: [
      "Led the architecture and development of a microservices-based SaaS platform serving 50,000+ active users",
      "Reduced API response time by 40% through implementing caching strategies and database query optimization",
      "Mentored junior developers and conducted code reviews to maintain high code quality standards",
    ],
  },
  {
    id: "2",
    company: "StartupXYZ",
    title: "Full-Stack Developer",
    duration: "Jun 2021 - Dec 2022",
    startDate: "2021-06",
    endDate: "2022-12",
    responsibilities: [
      "Built and launched the company's flagship product from scratch, contributing to 200% revenue growth",
      "Implemented CI/CD pipelines reducing deployment time from hours to minutes",
      "Designed and developed RESTful APIs and real-time features using WebSocket",
    ],
  },
  {
    id: "3",
    company: "Digital Agency Co.",
    title: "Junior Web Developer",
    duration: "Jul 2020 - May 2021",
    startDate: "2020-07",
    endDate: "2021-05",
    responsibilities: [
      "Developed responsive web applications for 20+ clients across various industries",
      "Collaborated with UI/UX designers to implement pixel-perfect, accessible interfaces",
      "Optimized frontend performance, achieving 90+ Lighthouse scores on all projects",
    ],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
