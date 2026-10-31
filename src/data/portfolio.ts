export const personalInfo = {
  name: "Vu",
  title: "Software Engineer",
  headline: "Software Engineer building immersive 3D web experiences.",
  subHeadline:
    "4+ years of experience building 3D virtual tours and web platforms with React, Next.js, Three.js and Node.js, and shipping them on AWS with CI/CD.",
  email: "duongcatvu17@gmail.com",
  linkedin: "https://www.linkedin.com/in/vu-duong-50867619a/",
  github: "https://github.com/catvuduong",
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
      { name: "ReactJS" },
      { name: "Next.js" },
      { name: "Three.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML5/CSS3" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "RESTful API" },
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "AWS (EC2, S3, CloudFront)" },
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "Git / GitHub" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Vite" },
      { name: "Webpack" },
      { name: "VS Code / Cursor" },
      { name: "Figma" },
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
  "Content & Media",
  "Recruiting",
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
    id: "net",
    category: "Productivity",
    title: "Bookmarks Manager",
    description:
      "A small bookmarks manager with search, tag chips, and a form that validates new links, built with ASP.NET Core, React, and PostgreSQL.",
    problem:
      "The project brief called for a bookmarks manager that saves titled links with tags, filters them by search text and tag, and rejects invalid input, backed by a minimal ASP.NET Core API on PostgreSQL.",
    solution:
      "Built from the repo's dotnet template, with an ASP.NET Core minimal API in apps/api whose tables are defined in the Db.cs schema, a React and Vite frontend in apps/web, and docker-compose and CI workflow files in the repo.",
    techStack: ["React", "ASP.NET Core", "PostgreSQL", "TypeScript"],
    liveUrl: "https://net-web-kappa.vercel.app",
    githubUrl: "https://github.com/catvuduong/net",
    image: "/projects/net.jpg",
  },
  {
    id: "analytics-dashboard",
    category: "Data & Analytics",
    title: "Analytics Dashboard",
    description:
      "A web analytics dashboard in the style of Plausible or Mixpanel, with event collection, traffic summaries, breakdowns, a conversion funnel, and live visitor counts, built with Next.js, NestJS, and PostgreSQL.",
    problem:
      "The project brief called for a web analytics product that collects events, reports visitors, pageviews, sessions, bounce rate, and revenue with period-over-period comparison, and breaks traffic down by page, referrer, country, and device.",
    solution:
      "Built as a fullstack monorepo from the existing template, with a NestJS API in apps/api on PostgreSQL via DbService, a Next.js web app in apps/web, docker-compose, and Vitest and Playwright test setups in the repo.",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    liveUrl: "https://analytics-dashboard-web-d5d4.vercel.app",
    githubUrl: "https://github.com/catvuduong/analytics-dashboard",
    image: "/projects/analytics-dashboard.jpg",
  },
  {
    id: "shopwave-store",
    category: "E-Commerce",
    title: "Shopwave Store",
    description:
      "An e-commerce store with a product catalog, filters, a slide-over cart, and checkout, built with Next.js, NestJS, and PostgreSQL.",
    problem:
      "The project brief called for a modern online store with catalog filtering and sorting, a cart that enforces stock limits, and checkout that validates stock and applies coupons, with all money kept as integer cents.",
    solution:
      "Built as a fullstack monorepo from the existing template, with a NestJS API on PostgreSQL via DbService, a Next.js storefront, docker-compose, and Playwright e2e tests in the repo.",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    liveUrl: "https://shopwave-store-web.vercel.app",
    githubUrl: "https://github.com/catvuduong/shopwave-store",
    image: "/projects/shopwave-store.jpg",
  },
  {
    id: "taskflow-projects",
    category: "Productivity",
    title: "Taskflow Projects",
    description:
      "A small Jira/Linear-style project management app with a Kanban board, task details, and an activity feed, built with Next.js, NestJS, and PostgreSQL.",
    problem:
      "The project brief called for a project management SaaS with tasks, a Kanban board, comments, activity logging, and stats, backed by a NestJS API on PostgreSQL.",
    solution:
      "Built as a fullstack monorepo from the existing template, with a NestJS API in apps/api using PostgreSQL via DbService, a Next.js web app in apps/web, and docker-compose and Playwright e2e tests in the repo.",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    liveUrl: "https://taskflow-projects-web.vercel.app",
    githubUrl: "https://github.com/catvuduong/taskflow-projects",
    image: "/projects/taskflow-projects.jpg",
  },
  {
    id: "mini-job-board",
    category: "Recruiting",
    title: "Mini Job Board",
    description:
      "A small job board with filterable listings and an application pipeline, built with Next.js, NestJS, and PostgreSQL.",
    problem:
      "The project brief called for a job board where candidates can browse and apply to jobs, and employers can move applications through a hiring pipeline with a PostgreSQL-backed API.",
    solution:
      "Built as a fullstack monorepo from the existing template, with a NestJS API on PostgreSQL via DbService, jobs and applications tables, and a Next.js web app with a Kanban-style employer pipeline.",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    liveUrl: "https://mini-job-board-web-six.vercel.app",
    githubUrl: "https://github.com/catvuduong/mini-job-board",
    image: "/projects/mini-job-board.jpg",
  },
  {
    id: "recipe-planner",
    category: "Productivity",
    title: "Recipe Planner",
    description:
      "A recipe book with a weekly meal planner, where you search recipes, find what you can cook from your fridge, and get a shopping list from the planned meals.",
    problem:
      "The project brief called for a recipe book with a weekly meal planner, recipe search by text, tag, and cooking time, and a shopping list that merges the ingredients of every planned meal.",
    solution:
      "Set up as a fullstack monorepo from the existing template, with a NestJS API on PostgreSQL via DbService for recipes, ingredients, steps, and the meal plan, a Next.js frontend with a 7-day planner grid, and Playwright e2e tests.",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    liveUrl: "https://recipe-planner-web-f48e.vercel.app",
    githubUrl: "https://github.com/catvuduong/recipe-planner",
    image: "/projects/recipe-planner.jpg",
  },
  {
    id: "mini-games-arcade",
    category: "Games",
    title: "Mini Games Arcade",
    description:
      "A browser arcade of three classic games, Memory Match, 2048, and Minesweeper, built with Next.js and TypeScript with no backend.",
    problem:
      "The project brief called for a polished arcade of three classic games with pure game logic kept apart from the UI, personal bests, and accessible controls, with no server.",
    solution:
      "Built in the repo's Next.js and TypeScript web app from the existing template, keeping game logic in pure functions that accept a seed for deterministic tests, storing state in React and localStorage, and covering it with unit tests and Playwright e2e tests.",
    techStack: ["Next.js", "TypeScript"],
    liveUrl: "https://mini-games-arcade-web.vercel.app",
    githubUrl: "https://github.com/catvuduong/mini-games-arcade",
    image: "/projects/mini-games-arcade.jpg",
  },
  {
    id: "flashcards",
    category: "Productivity",
    title: "Flashcards",
    description:
      "A spaced-repetition flashcards app built with Next.js, NestJS, and PostgreSQL, with decks, a study mode, and a stats page.",
    problem:
      "The project brief called for a spaced-repetition study app that schedules each card with the SM-2 algorithm, with a NestJS API on PostgreSQL and a Next.js interface for decks, study sessions, and stats.",
    solution:
      "Built as a fullstack monorepo from the existing template, with a NestJS API on PostgreSQL via DbService, a Next.js web app, docker-compose, and unit, API e2e, and Playwright e2e test setups in the repo.",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    liveUrl: "https://flashcards-web-d673.vercel.app",
    githubUrl: "https://github.com/catvuduong/flashcards",
    image: "/projects/flashcards.jpg",
  },
  {
    id: "quotes-api",
    category: "Content & Media",
    title: "Quotes API",
    description:
      "A public REST API for famous quotes, built with NestJS and PostgreSQL, with filtering, random quotes, and API-key protected write endpoints.",
    problem:
      "The project brief called for a public API serving a catalog of famous quotes, with pagination, filters, a random endpoint, and protected writes, plus rate limiting for public use.",
    solution:
      "Built a NestJS API on PostgreSQL through the existing DbService, with about 60 public-domain quotes seeded idempotently on startup, an x-api-key check on write endpoints, Swagger docs at /docs, and e2e tests in the repo.",
    techStack: ["NestJS", "PostgreSQL", "TypeScript"],
    liveUrl: "https://quotes-api-api.vercel.app",
    githubUrl: "https://github.com/catvuduong/quotes-api",
    image: "/projects/quotes-api.jpg",
  },
  {
    id: "audio-visualizer",
    category: "3D & Creative",
    title: "Audio Visualizer",
    description:
      "An audio-reactive visualizer built with Next.js, TypeScript, and the Web Audio API, with radial bars, a glowing waveform ribbon, and a bass-driven particle field.",
    problem:
      "The project brief called for an audio visualizer that works with a built-in demo track, microphone input, or a dropped audio file, and shows an animated idle state before audio starts because browsers block autoplay.",
    solution:
      "Built in the repo's Next.js and TypeScript web app from the existing template, driving the visuals from the Web Audio API's AnalyserNode with canvas or React Three Fiber for rendering, and Playwright e2e tests for the canvas and mode switching.",
    techStack: ["Next.js", "TypeScript"],
    liveUrl: "https://audio-visualizer-web-0b44.vercel.app",
    githubUrl: "https://github.com/catvuduong/audio-visualizer",
    image: "/projects/audio-visualizer.jpg",
  },
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
    company: "Vizion Technologies LLC",
    title: "Full-Stack Developer",
    duration: "Jul 2023 - Present",
    startDate: "2023-07",
    endDate: "Present",
    responsibilities: [
      "Own 3D virtual tour platforms end to end, from React and Three.js frontends to Node.js and MongoDB backends, for clients in real estate, manufacturing and hospitality",
      "Set up cloud infrastructure and CI/CD pipelines on AWS (EC2, S3, CloudFront) with Docker, so releases ship automatically and reliably",
      "Built authentication and access control, admin portals and a real-time IoT monitoring dashboard inside a virtual space",
      "Integrated Google Analytics to track user behavior across virtual tours and generate insight reports in the admin portal",
      "Worked with the AI team to embed smart tools into the platform, and planned and delivered projects in an Agile/Scrum team",
    ],
  },
  {
    id: "2",
    company: "Vizion Technologies LLC",
    title: "Junior Web Developer",
    duration: "Jun 2022 - Jun 2023",
    startDate: "2022-06",
    endDate: "2023-06",
    responsibilities: [
      "Joined the team as a junior and built interactive 3D virtual tours and demo sites with ReactJS and Three.js for real estate, manufacturing and hospitality",
      "Implemented responsive interfaces and smooth 3D navigation between apartment zones and amenities",
      "Learned the team's workflow through code reviews and Agile/Scrum ceremonies, and took on backend and deployment tasks as I grew",
    ],
  },
  {
    id: "3",
    company: "Cybersoft Academy",
    title: "Full-Stack Web Development Bootcamp",
    duration: "Oct 2021 - May 2022",
    startDate: "2021-10",
    endDate: "2022-05",
    responsibilities: [
      "Completed an intensive bootcamp covering programming logic and problem solving, Java, HTML, CSS and JavaScript",
      "Built web applications with React and Angular, and backend services with Node.js",
      "Worked in teams on practice projects using Git and Agile practices",
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
