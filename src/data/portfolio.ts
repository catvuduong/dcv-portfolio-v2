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
  "Games",
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
    id: "typing-speed-game",
    category: "Games",
    title: "Typing Speed Game",
    description:
      "A typing speed game built with Next.js and TypeScript, with 15, 30, and 60-second tests, live WPM and accuracy, a results screen, and a local leaderboard.",
    problem:
      "The project brief called for a browser typing test with timed modes, per-character feedback, and a results screen, with no backend.",
    solution:
      "Built in the repo's Next.js and TypeScript web app from the existing template, with the top-10 leaderboard kept in localStorage and Playwright e2e tests in the repo.",
    techStack: ["Next.js", "TypeScript"],
    liveUrl: "https://typing-speed-game-web-8506.vercel.app",
    githubUrl: "https://github.com/catvuduong/typing-speed-game",
    image: "/projects/typing-speed-game.jpg",
  },
  {
    id: "markdown-notes",
    category: "Productivity",
    title: "Markdown Notes",
    description:
      "A markdown notes app with a searchable sidebar and a split editor with live preview, where all notes are stored in the browser with no backend.",
    problem:
      "The project brief called for a markdown notes app with tags, pinning, and a live preview, with all data kept in localStorage and no server.",
    solution:
      "Built in the repo's Next.js and TypeScript web app from the existing template, using react-markdown with remark-gfm for the preview and localStorage for persistence.",
    techStack: ["Next.js", "TypeScript"],
    liveUrl: "https://markdown-notes-web-7b5b.vercel.app",
    githubUrl: "https://github.com/catvuduong/markdown-notes",
    image: "/projects/markdown-notes.jpg",
  },
  {
    id: "weather-dashboard",
    category: "Data & Analytics",
    title: "Weather Dashboard",
    description:
      "A weather dashboard built with Next.js and TypeScript, showing current conditions, a 24-hour temperature and precipitation chart, and a 7-day forecast.",
    problem:
      "The project brief called for a polished weather dashboard with city search, a unit toggle, and loading and error states, all driven by live weather data.",
    solution:
      "Built in the repo's Next.js and TypeScript web app from the existing template, using the free Open-Meteo forecast and geocoding APIs, which need no API key.",
    techStack: ["Next.js", "TypeScript"],
    liveUrl: "https://weather-dashboard-web-44a7.vercel.app",
    githubUrl: "https://github.com/catvuduong/weather-dashboard",
    image: "/projects/weather-dashboard.jpg",
  },
  {
    id: "habit-tracker",
    category: "Productivity",
    title: "Habit Tracker",
    description:
      "A habit tracker with streaks, where you check off today's habits and follow each one on a contribution heatmap.",
    problem:
      "The project brief called for tracking daily habits with streaks, which needed a database for habits and check-ins plus an API behind a responsive dashboard.",
    solution:
      "Built as a fullstack monorepo from the existing template, with a NestJS API on PostgreSQL via DbService that computes streaks on the server, a Next.js dashboard with heatmaps and a weekly chart, and Playwright e2e tests.",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    liveUrl: "https://habit-tracker-web-35dc.vercel.app",
    githubUrl: "https://github.com/catvuduong/habit-tracker",
    image: "/projects/habit-tracker.jpg",
  },
  {
    id: "link-shortener",
    category: "Data & Analytics",
    title: "Link Shortener",
    description:
      "A URL shortener with click analytics, showing clicks over time, referrers, and device split for each link.",
    problem:
      "The project brief called for shortening links while recording every click, which needed a database for links and clicks plus an API behind a web interface.",
    solution:
      "Built as a fullstack monorepo from the existing template, with a NestJS API on PostgreSQL via DbService, a Next.js web app, docker-compose, and Playwright e2e tests.",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    liveUrl: "https://link-shortener-web-f50c.vercel.app",
    githubUrl: "https://github.com/catvuduong/link-shortener",
    image: "/projects/link-shortener.jpg",
  },
  {
    id: "kanban-board",
    category: "Productivity",
    title: "Kanban Board",
    description:
      "A Kanban board web app for organizing work into columns, built with Next.js and TypeScript.",
    problem:
      "The project brief was to build a Kanban board on top of the existing web template in the repo.",
    solution:
      "Built the board inside the repo's Next.js and TypeScript web app, starting from the template already in place.",
    techStack: ["Next.js", "TypeScript"],
    liveUrl: "https://kanban-board-web-6704.vercel.app",
    githubUrl: "https://github.com/catvuduong/kanban-board",
    image: "/projects/kanban-board.jpg",
  },
  {
    id: "liquid-orb-playground",
    category: "3D & Creative",
    title: "Liquid Orb Playground",
    description:
      "A fullstack playground built around a liquid orb, with a Next.js frontend and a NestJS API backed by PostgreSQL.",
    problem:
      "Exploring a liquid orb as a web experience needed a frontend to display it and a backend API with a database to support it.",
    solution:
      "Built as a fullstack monorepo from the existing template, with a Next.js web app, a NestJS API, PostgreSQL via docker-compose, and Playwright e2e tests.",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    liveUrl: "https://liquid-orb-playground-web.vercel.app",
    githubUrl: "https://github.com/catvuduong/liquid-orb-playground",
    image: "/projects/liquid-orb-playground.jpg",
  },
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
