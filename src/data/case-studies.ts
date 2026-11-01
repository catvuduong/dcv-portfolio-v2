export type CaseStudy = {
  tagline: string;
  role: string;
  overview: string;
  features: { title: string; text: string }[];
  highlights: string[];
  learned: string[];
  /** Extra screenshots in /public/projects, shown below the overview. */
  shots: string[];
};

export const caseStudies: Record<string, CaseStudy> = {
  teamdesk: {
    tagline: "A helpdesk where every ticket has a clock.",
    role: "Design, full-stack development and deployment",
    overview:
      "Small support teams tend to juggle email threads and spreadsheets. TeamDesk gives customers one place to file and follow their tickets, gives agents a queue that shows what is about to breach, and lets admins control people and roles.",
    features: [
      {
        title: "SLA tracking",
        text: "Each priority has a first-response and a resolution target. A pure, unit-tested function turns elapsed time into on track, at risk (over 75% used) or breached, shown as a badge with a countdown.",
      },
      {
        title: "Role-based access",
        text: "Customers see only their own tickets, agents work and assign the queue, and admins manage users and roles.",
      },
      {
        title: "Reports and export",
        text: "A breach-rate report by priority, and a CSV export that follows the active filters and escapes quotes, commas and newlines correctly.",
      },
      {
        title: "Help center",
        text: "Searchable articles are suggested while a customer writes a new ticket, so simple questions never reach the queue.",
      },
      {
        title: "Abuse protection",
        text: "Per-IP rate limiting on sign-in, answering 429 with a Retry-After header.",
      },
    ],
    highlights: [
      "ASP.NET Core 8 minimal API with Dapper on PostgreSQL",
      "React, Vite and TypeScript front end with light and dark themes",
      "xUnit tests for the SLA edge cases and Playwright end-to-end flows",
      "GitHub Actions CI; web on Vercel, API on Render, database on Neon",
    ],
    learned: [
      "Keeping the SLA math in one pure function made the edge cases (exactly 75%, exactly at the limit, resolved tickets) easy to test.",
      "Streaming a CSV safely taught me more about escaping than I expected.",
    ],
    shots: ["/projects/teamdesk-1.jpg", "/projects/teamdesk-2.jpg"],
  },
  "analytics-dashboard": {
    tagline: "Plausible-style analytics you can read at a glance.",
    role: "Design, full-stack development and deployment",
    overview:
      "A privacy-friendly web analytics dashboard: a tiny collector receives page events, and the dashboard turns them into traffic summaries, breakdowns and a conversion funnel.",
    features: [
      {
        title: "Event collection",
        text: "A NestJS endpoint stores page views and custom events in PostgreSQL, with validation on every payload.",
      },
      {
        title: "Traffic summary",
        text: "Visitors, page views, sessions and bounce rate with a comparison to the previous period.",
      },
      {
        title: "Breakdowns",
        text: "Top pages, referrers, countries and devices, each sortable and filterable by date range.",
      },
      {
        title: "Conversion funnel",
        text: "Define steps and see where visitors drop off between them.",
      },
      {
        title: "Live visitors",
        text: "A live counter of who is on the site right now.",
      },
    ],
    highlights: [
      "Next.js front end with a dark, data-dense layout",
      "NestJS API on PostgreSQL, tables created in code",
      "Vitest unit tests and Playwright end-to-end tests",
    ],
    learned: [
      "Aggregating in SQL instead of in the API kept the dashboard fast even with a large seeded dataset.",
      "Designing a dense dashboard is mostly about deciding what to leave out.",
    ],
    shots: ["/projects/analytics-dashboard-1.jpg", "/projects/analytics-dashboard-2.jpg"],
  },
  "shopwave-store": {
    tagline: "A storefront that feels like a real shop.",
    role: "Design, full-stack development and deployment",
    overview:
      "A small e-commerce store with a product catalog, filters, a slide-over cart and checkout, built to show a complete buying flow from browsing to order confirmation.",
    features: [
      {
        title: "Catalog and filters",
        text: "Browse a seeded catalog and narrow it down by category, price and search text.",
      },
      {
        title: "Slide-over cart",
        text: "Add items from anywhere and adjust quantities without leaving the page.",
      },
      {
        title: "Checkout",
        text: "Validated checkout form that creates an order through the API and shows a confirmation.",
      },
    ],
    highlights: [
      "Next.js storefront with a considered editorial look",
      "NestJS API on PostgreSQL for products and orders",
      "Playwright tests covering the buying flow",
    ],
    learned: [
      "A cart that never loses state across page loads matters more than any animation.",
      "Good product photography direction (even with placeholder art) changes how trustworthy a shop feels.",
    ],
    shots: ["/projects/shopwave-store-1.jpg", "/projects/shopwave-store-2.jpg"],
  },
  "neon-city-flythrough": {
    tagline: "Scroll to fly through a cyberpunk night city.",
    role: "Concept, design and development",
    overview:
      "A scroll-driven 3D scene: as you scroll, the camera glides down a rain-soaked street between neon signs, fog and reflections. It is an experiment in making a page feel like a film.",
    features: [
      {
        title: "Scroll-driven camera",
        text: "The camera path is tied to scroll progress, so the visitor controls the pace of the flight.",
      },
      {
        title: "Atmosphere",
        text: "Neon signs, volumetric-looking fog, rain and a wet, reflective road build the mood.",
      },
    ],
    highlights: [
      "Rendered in the browser with WebGL",
      "Built with Next.js and TypeScript",
      "Tuned to stay smooth on laptops",
    ],
    learned: [
      "Performance is the design brief for 3D on the web: every effect has to earn its frame time.",
      "Fog and reflections do more for atmosphere than extra geometry.",
    ],
    shots: ["/projects/neon-city-flythrough-1.jpg", "/projects/neon-city-flythrough-2.jpg"],
  },
};
