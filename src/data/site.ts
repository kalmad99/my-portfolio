export const site = {
  name: "Kaleb Mesfin",
  title: "Software Engineer",
  tagline:
    "Full-stack engineer working on fintech platforms and secure systems, from credit decisioning engines to multi-tenant banking dashboards.",
  location: "Addis Ababa, Ethiopia",

  homeIntro: {
    heading: "I build fintech systems and the frontend that makes them usable.",
    body: "Most of my work sits at the intersection of lending platforms, credit decisioning, and the operational tools teams use to run them day to day. I write mostly Python and TypeScript, and I care about systems that hold up once real money and real users are moving through them.",
  },

  about: {
    paragraphs: [
      "I'm a software engineer based in Addis Ababa. My work has mostly centered on fintech: lending platforms, credit scoring, invoice financing, and the admin tools that banks and operators actually use to run these systems.",
      "I got into this by building real things for real clients early on, then gradually taking on bigger pieces of systems: APIs, scoring engines, multi-tenant dashboards. I like owning a problem end to end, and I try to be honest about scope, both what I built and what I contributed to on a larger team.",
      "Lately I'm drawn to problems where correctness and security matter as much as speed: decisioning logic, encrypted data flows, permission systems, and the plumbing that connects all of it.",
    ],
  },

  contact: {
    email: "kaleb@kalebmesfin.dev",
    linkedin: "https://www.linkedin.com/in/kaleb-mesfin",
    github: "https://github.com/kalmad99",
  },

  stack: {
    backend: ["Python", "Django", "FastAPI", "Flask", "NestJS", "PostgreSQL", "GraphQL", "Celery"],
    frontend: ["TypeScript", "React", "Next.js", "TanStack Query", "Tailwind CSS", "Flutter", "React Native"],
    infra: ["Docker", "Redis", "AWS S3", "Supabase", "Vercel"],
    tools: ["Git", "Prisma", "Alembic", "pytest"],
  },
} as const;