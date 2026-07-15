export type Tier = "flagship" | "standard" | "brief";

export interface ProjectDetail {
  problem: string;
  myRole: string;
  architecture: string;
  technicalHighlights: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface SiteChip {
  label: string;
  href: string;
  image: string;
}

export interface Project {
  slug: string;
  title: string;
  company?: string;
  tier: Tier;
  oneLiner: string;
  description: string;
  role: string;
  stack: string[];
  highlights?: string[];
  footnote?: string;
  detail?: ProjectDetail;
  image?: string;
  links?: ProjectLink[];
  sites?: SiteChip[];
  /** Inline architecture diagram key for flagship detail pages */
  diagram?:
    | "scoring-service"
    | "secure-view"
    | "new-dashboard"
    | "creditit-backend";
}

export const projects: Project[] = [
  // —— Flagship ——
  {
    slug: "creditit-backend",
    title: "Creditit Backend Contributions",
    company: "Creditit",
    tier: "flagship",
    oneLiner:
      "Credit scoring, payment forecasting, and bank-statement extraction, contributed to a larger invoice-financing platform.",
    description:
      "Specific modules built within a larger fintech platform for invoice financing: scoring, ML-based forecasting, and OCR-based statement extraction.",
    role: "Contributing backend engineer, owning a few specific workstreams.",
    stack: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "scikit-learn", "OCR", "AWS"],
    diagram: "creditit-backend",
    footnote:
      "I also made a few small frontend contributions, an ops financing-requests page and some facility-configurator tweaks. Minor enough that it's a footnote here, not its own project.",
    detail: {
      problem:
        "An invoice-financing platform needs more than CRUD around invoices and facilities. Credit decisions need real financial signals behind them, collections planning benefits from knowing when a payment is likely to land, and bank statements arrive as PDFs that nobody wants to parse by hand. These needed to slot into an existing, much larger codebase without me pretending I built the whole thing.",
      myRole:
        "My workstreams were a weighted credit-scoring service built on financial metrics, an ML-based payment-date forecasting pipeline, and an OCR pipeline for extracting data from bank statements.",
      architecture:
        "The Creditit backend is a Flask, SQLAlchemy, and PostgreSQL service with scheduled jobs and various cloud integrations. My modules plug into that: a scoring service that scores customers from binned financial metrics on a schedule, a forecasting path that calls into an ML pipeline for payment timing signals and exposes it through REST endpoints and CSV export, and a statement-extraction pipeline that chunks large PDFs, runs OCR, and maps the results into schemas for a few different banks with some concurrency to keep it fast. I'm keeping this at the conceptual level. The actual weights, thresholds, and formulas stay proprietary.",
      technicalHighlights: [
        "A weighted credit-scoring service over financial metrics, recalculated on a schedule.",
        "An ML payment-date forecasting pipeline behind REST endpoints and CSV export.",
        "OCR-based bank-statement extraction with PDF chunking and concurrent processing across multiple bank formats.",
      ],
    },
  },
  {
    slug: "scoring-service",
    title: "Scoring Service",
    company: "Quadrant Technologies",
    tier: "flagship",
    oneLiner:
      "A credit-scoring and loan-decisioning engine built on scorecards and a rules layer.",
    description:
      "A production decisioning service for a lending platform. Supports multiple scorecards, scopes decisions by organization and product, and applies a rules layer over banking data to reach approve or reject calls.",
    role: "Primary implementer of the current scoring architecture.",
    stack: ["Python", "Django", "DRF", "PostgreSQL", "Celery", "Redis", "PMML", "Docker"],
    diagram: "scoring-service",
    detail: {
      problem:
        "Lending partners needed a way to turn raw banking data into approve or reject decisions and approved limits, without hardcoding a new scorecard for every product. That meant supporting several scorecards at once, scoping decisions by organization and product, and keeping things fast even as score requests piled up.",
      myRole:
        "I took over the scoring service during its current phase and pushed it forward: multi-scorecard support, org and product scoping, dedup work to speed up repeated score requests, hardening around edge cases in the rules layer, and getting the whole thing running reliably in Docker. Some of the original foundation predates me. I focused on the parts that made it production-ready at scale.",
      architecture:
        "A Django/DRF service sits in front of PostgreSQL. Score requests carry customer banking signals, salary, account age, transaction and turnover history, loan history. PMML scorecards produce a score, and a configurable rules engine turns that into a decision: approve, reject, rejection reason, and approved limit. Celery and Redis handle the async and scheduled pieces. The service supports several scorecard variants, including MSME and IFB-oriented paths, scoped by organization and product so different partners can share the same engine without forking the logic.",
      technicalHighlights: [
        "Multi-scorecard support scoped by organization and product, so new lending products reuse the engine instead of forking it.",
        "Dedup and indexing work on score requests to keep decisioning fast under repeated load.",
        "Multi-stage Docker setup so local and production environments actually match.",
      ],
    },
  },
  {
    slug: "new-dashboard",
    title: "QDL Dashboard",
    company: "Quadrant Technologies",
    tier: "flagship",
    oneLiner:
      "A multi-tenant banking operations platform, built from scratch and still actively maintained.",
    description:
      "An operations console for a multi-bank lending platform, supporting per-bank branding, role-based permissions, and admin workflows across loans, merchants, and devices.",
    role: "Created it from scratch, and still lead its architecture and major features.",
    stack: ["Next.js", "TypeScript", "Redux Toolkit", "NextAuth", "Tailwind CSS", "ApexCharts"],
    diagram: "new-dashboard",
    detail: {
      problem:
        "Bank partners each needed their own branded operations console, but nobody wanted to maintain a separate app per bank. That meant building one platform that could white-label per tenant, enforce a real permission model, and support admin work across loans, merchants, devices, and business-rule configuration.",
      myRole:
        "I started this from an empty Next.js project and built out the core architecture: auth, a reusable table and form library, dynamic per-bank theming and routing, and the overall admin module structure. I still actively maintain it and ship major features, including a security patch for a critical framework-level vulnerability and the permission system, while teammates handle bank-specific rollout and integration.",
      architecture:
        "A Next.js App Router SPA in TypeScript talks to the lending backend over a standard data-fetching layer with NextAuth handling sessions. Multi-tenant white-labeling maps each bank to its own theme tokens and routing, so the same codebase can present as several distinct branded products. A role and permission system (RBAM/PBAM) gates navigation and actions. On top of that sit the actual admin modules: users and devices, loan-approval workflows for MSME, merchant management, reporting, and configurable business rules like multipliers, interest, and commission, described here only as configuration surfaces rather than specific partner formulas.",
      technicalHighlights: [
        "Per-bank white-labeling and theming from one shared codebase.",
        "A permission system that drives what shows up in the sidebar and what actions are actually allowed.",
        "A reusable table and form library that became the foundation for the rest of the admin UI.",
        "Shipped a patch for a critical framework-level vulnerability, plus ongoing fixes from pentest findings.",
      ],
    },
  },
  {
    slug: "secure-view",
    title: "Secure View",
    company: "Personal project",
    tier: "flagship",
    oneLiner:
      "Encrypted, view-only file sharing, with a FastAPI backend and a native Android client.",
    description:
      "A system for sharing sensitive files as view-only content instead of downloadable copies. Server-side encryption, an audit trail on every access, and a hardened Android client.",
    role: "Solo project. Built the backend, the encryption model, and the Android client.",
    stack: ["FastAPI", "Supabase", "Cloudflare R2", "Kotlin", "Android", "PostgreSQL"],
    diagram: "secure-view",
    detail: {
      problem:
        "Most file-sharing tools assume the recipient ends up with a copy. For sensitive documents, that's often exactly what you don't want: people should be able to view something without easily walking away with it, and every access should be logged. That's not something you can bolt onto a normal file-sharing app after the fact. It has to be the starting point.",
      myRole:
        "I built this end to end: the FastAPI API, auth and data model on Supabase, encrypted object storage on Cloudflare R2, the encryption scheme itself, audit logging, and a native Android client with the platform-level protections needed to make view-only actually mean something.",
      architecture:
        "Clients authenticate against the API. Files are encrypted server-side with an envelope-encryption scheme before they land in Cloudflare R2, so the object storage only ever holds ciphertext. Keys and metadata live behind Supabase and Postgres, with row-level security where it matters. The Android client renders content for viewing only, using FLAG_SECURE to block screenshots and basic root detection to reduce tampering risk, while the server logs every access for an audit trail.",
      technicalHighlights: [
        "Server-side envelope encryption, so object storage never holds plaintext.",
        "A native Android client built around FLAG_SECURE and root detection for genuinely view-only sharing.",
        "Audit logging on every access, so sharing isn't a black box after the fact.",
        "Clear separation of concerns across FastAPI, Supabase, and R2: API logic, auth and access policy, and encrypted storage each stay in their own lane.",
      ],
    },
  },


  // —— Standard ——
  {
    slug: "pathsin",
    title: "Pathsin Platform",
    company: "Yaltopia",
    tier: "standard",
    oneLiner:
      "A workforce and recruitment platform: CVs, job listings, Stripe payments, passport OCR, bilingual EN/AR.",
    description:
      "A full-stack recruitment platform. The backend is a FastAPI service covering users and roles, CVs, job listings, recruitment workflows, Stripe checkout and webhooks, transfers, notifications, and PDF generation. The frontend is a React and TypeScript SPA with full English/Arabic support.",
    role: "Primary backend author, and a major contributor on the frontend.",
    stack: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Stripe", "React", "TypeScript", "TanStack Query", "i18next"],
    highlights: [
      "A repository pattern with async handlers, generic search and pagination, and solid pytest coverage across the API.",
      "Passport OCR using OpenCV and Tesseract, plus a migration from email-based to UUID-based identity across the system.",
    ],
  },
  {
    slug: "support-telegram-bot",
    title: "Support Telegram Bot",
    company: "Quadrant Technologies",
    tier: "standard",
    oneLiner:
      "A multi-tenant, trilingual support bot for bank clients, configured per client without touching code.",
    description:
      "A production Telegram bot for bank support: FAQs, problem reporting with attachments, ticket tracking, and separate flows for customers and merchants. Runs in English, Amharic, and Oromifa, with per-client overrides.",
    role: "Fully my work, from the multi-tenant config system to the conversation flows and integrations.",
    stack: ["Python", "Telethon", "PostgreSQL", "JSON config"],
    highlights: [
      "Per-bank JSON configs for FAQs, translations, contacts, and database names, so onboarding a new client doesn't require a code change.",
      "Separate conversation flows for customers and merchants, with session handling and a ticket-tracking integration.",
    ],
  },
  {
    slug: "reporting-dashboard",
    title: "Reporting Dashboard",
    company: "Quadrant Technologies",
    tier: "standard",
    oneLiner:
      "A loan-operations reporting SPA, built solo around one reusable report component.",
    description:
      "A reporting dashboard for loan operations: all-loans follow-up, near-maturity and daily-due views, defaults by branch and district, head-office rollups, role-scoped access, filtering, search, and export.",
    role: "Built solo, from scratch.",
    stack: ["React", "TypeScript", "Vite", "TanStack Query", "Tailwind CSS"],
    highlights: [
      "One reusable report component and a set of hooks, instead of duplicating near-identical report pages over and over.",
      "Role-based scoping from branch to district to head office, with consistent search and export across all of it.",
    ],
  },
  {
    slug: "mkopo-easy-admin",
    title: "Mkopo Easy Admin Dashboard",
    company: "Quadrant Technologies",
    tier: "standard",
    oneLiner:
      "An admin console for merchant and creditor onboarding, loan config, and device management.",
    description:
      "The central admin console for Mkopo Easy: onboarding merchants and creditors, managing customers, configuring loans and commissions, locking devices, and multi-entity reporting.",
    role: "Built the product during an intensive six-week sprint, currently being maintained by a teammate.",
    stack: ["React", "TypeScript", "Vite", "TanStack Router", "TanStack Query", "Zustand", "Shadcn UI"],
    highlights: [
      "A generic data-table pattern with debounced search, filters, and server-side pagination, reused across most entity views.",
      "Permission-gated routing and sidebar filtering based on JWT claims, for straightforward admin RBAC.",
    ],
  },
  {
    slug: "enterprise-lending-dashboard",
    title: "Enterprise Lending Dashboard",
    company: "Quadrant Technologies",
    tier: "standard",
    oneLiner:
      "A greenfield lending portal for corporate and agency clients, built solo and still evolving.",
    description:
      "A lending portal in the same ecosystem, aimed at enterprise clients: per-bank theming, corporate and agency profiles, loan requests, repayment flows, a product picker with live estimation, and document uploads.",
    role: "Sole author. Still actively growing this one.",
    stack: ["Next.js", "TypeScript", "NextAuth", "TanStack Query", "Zustand", "Tailwind CSS"],
    highlights: [
      "An auth layer with JWT refresh, plus a dev mock mode so the UI could move forward before the backend was ready.",
      "Shared lending components reused across both the corporate and agency journeys.",
    ],
  },
  {
    slug: "cms",
    title: "CMS",
    company: undefined,
    tier: "standard",
    oneLiner:
      "A construction and material-management system: NestJS GraphQL backend with a Flutter mobile app.",
    description:
      "A material and construction management system: a GraphQL API over Prisma and PostgreSQL, paired with a Flutter app for field use. Built with a small team, where I owned most of the system.",
    role: "Primary author on a small team.",
    stack: ["NestJS", "GraphQL", "Prisma", "PostgreSQL", "Flutter"],
    highlights: [
      "A GraphQL schema modeling materials, roles, and day-to-day operational workflows end to end.",
      "A Flutter mobile app alongside the API for field-facing use.",
    ],
  },
  {
    slug: "quantum-tech-website",
    title: "Quantum Technology PLC Website",
    company: "Quadrant Technologies",
    tier: "standard",
    oneLiner:
      "A corporate marketing site, built SEO-first on Next.js with GSAP animation.",
    description:
      "The public site for Quantum Technology PLC: home, about, services, careers, privacy and terms, and a contact form.",
    role: "Built solo.",
    stack: ["Next.js", "TypeScript", "GSAP", "CSS Modules"],
    highlights: [
      "SEO-first App Router setup, with per-page metadata, Open Graph tags, and canonical URLs.",
      "GSAP ScrollTrigger animation on the services hero and a few other sections.",
    ],
    links: [{ label: "View live", href: "https://quantum.et" }],
  },

  // —— Brief ——
  {
    slug: "bilos-pastries",
    title: "Bilos Pastries",
    company: "Bilos Pastries",
    tier: "brief",
    oneLiner: "Designed and delivered a WordPress site for a bakery client.",
    description: "A WordPress and Elementor marketing site, designed and delivered for a bakery client.",
    role: "Site design and delivery.",
    stack: ["WordPress", "Elementor"],
    links: [{ label: "View live", href: "https://bilospastry.com/" }],
  },
  {
    slug: "alphabet-trading-web-suite",
    title: "Alphabet Trading Web Suite",
    company: "Alphabet Trading",
    tier: "brief",
    oneLiner: "Early frontend work across marketing sites for a coffee and media company.",
    description:
      "Frontend work across a few marketing sites for an Ethiopian coffee and media company, in Next.js and Tailwind with GSAP and Framer Motion, including full bilingual support on one of them. Some of my first professional projects. I wasn't the sole owner of these, just a contributor.",
    role: "Frontend contributor across a few client marketing sites.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
    sites: [
      {
        label: "Alphabet Trading",
        href: "https://alphabettrading.com/",
        image: "/projects/alphabet-trading-website/cover.png",
      },
      {
        label: "Lucid Pictures",
        href: "http://lucidpicturesplc.com/",
        image: "/projects/lucid-pictures/cover.png",
      },
    ],
  },
  {
    slug: "mini-store-hub",
    title: "Mini Store Hub",
    company: "Alphabet Trading",
    tier: "brief",
    oneLiner: "Contributed to a retail operations platform across mobile, dashboard, and notifications.",
    description:
      "Contributed to (didn't build solo) a retail operations platform built on NestJS GraphQL, React Native, and Next.js, touching inventory, sales, and notification work across mobile and dashboard.",
    role: "Full-stack contributor on a team-built platform.",
    stack: ["NestJS", "GraphQL", "React Native", "Next.js"],
  },
];

export function getFlagshipProjects(): Project[] {
  return projects.filter((p) => p.tier === "flagship");
}

export function getStandardProjects(): Project[] {
  return projects.filter((p) => p.tier === "standard");
}

export function getBriefProjects(): Project[] {
  return projects.filter((p) => p.tier === "brief");
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFlagshipSlugs(): string[] {
  return getFlagshipProjects().map((p) => p.slug);
}