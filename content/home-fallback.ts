import type {
  BookSectionData,
  ConsultingSectionData,
  HeroSectionData,
  ResourcesSectionData,
  SectorsSectionData,
  SolutionsSectionData,
  StrapiSection,
} from "@/types/strapi";

const hero: HeroSectionData = {
  __component: "sections.hero",
  id: 1,
  heading: "Innovation for heavy industry",
  subtitle:
    "Serving mining, quarrying, and heavy operations, we build real-world systems that elevate your teams. This includes corporate AI role-play for soft skills and AI safety intelligence for mining and quarrying operations.",
  primaryCtaText: "Let's talk",
  primaryCtaHref: "#book",
  secondaryCtaText: "See what we build",
  secondaryCtaHref: "#solutions",
  imageUrl: "/images/home/heart.png",
};

const solutions: SolutionsSectionData = {
  __component: "sections.solutions",
  id: 2,
  heading: "Innovation Studio: Industrial AI and Human Performance at Work",
  intro:
    "We work with asset-intensive operations to accelerate digital transformation and industrial AI adoption. Our innovation consulting and AI-powered training systems strengthen human performance and improve how teams learn, operate, and make decisions.",
  cards: [
    {
      id: 1,
      title: "Canary Waves",
      body:
        "Canary Waves turns the two-way radio traffic already running across a site into real-time safety intelligence, surfacing collision risks, flagged hazards, and missed protocols to leadership before they reach the incident report. It runs passively on existing infrastructure, with no change to frontline operations.",
      href: "https://canary-waves.com/",
      accentTheme: "yellow",
    },
    {
      id: 2,
      title: "Georgia",
      body:
        "Georgia is an AI role-play platform that trains teams for high-stakes moments: holding price under pressure, de-escalating an unhappy client before they walk away, giving feedback before it becomes a crisis. Knowing what to say is not the same as saying it under pressure, so Georgia builds the skill through short, personalized practice. Built in the field, for construction, mining, and building materials.",
      href: "https://www.georgia-app.com/",
      accentTheme: "green",
    },
    {
      id: 3,
      title: "Vision AI",
      body: "Real-time safety and PPE monitoring via existing camera systems.",
      accentTheme: "yellow",
    },
    {
      id: 4,
      title: "Market Analysis",
      body: "Localized demand and pricing intelligence for aggregates.",
      accentTheme: "green",
    },
    {
      id: 5,
      title: "Configure Price Quote",
      body: "End-to-end building-materials quoting and pricing.",
      accentTheme: "coral",
    },
  ],
};

const consulting: ConsultingSectionData = {
  __component: "sections.consulting",
  id: 3,
  heading: "Consulting Services",
  cards: [
    {
      id: 1,
      title: "Pricing for Heavy Industry",
      body: "Know your true cost on every job and hold the price that protects your margin.",
      href: "#book",
      tags: ["Cost and mix calculators", "Pricing maturity"],
      accentTheme: "green",
    },
    {
      id: 2,
      title: "Commercial Performance",
      body: "See where margin leaks, measure what matters, and train your team to plug it.",
      href: "#book",
      tags: ["Diagnostic", "Scorecards and attractiveness", "Sales training"],
      accentTheme: "green",
    },
    {
      id: 3,
      title: "AI for Safety and Operations",
      body: "Put AI where it protects people and uptime, tuned to your site and proven before you scale.",
      href: "#book",
      tags: ["PPE and hazard detection", "Comms intelligence", "Site-tuned models"],
      accentTheme: "green",
    },
    {
      id: 4,
      title: "Soft Skill Development",
      body: "Build the everyday conversations that protect safety, performance and wellbeing.",
      href: "#book",
      tags: ["Safety communication", "Leadership and feedback", "Wellbeing"],
      accentTheme: "green",
    },
  ],
};

const sectors: SectorsSectionData = {
  __component: "sections.sectors",
  id: 4,
  heading: "Sectors we serve",
  items: [
    { id: 1, label: "Construction Materials" },
    { id: 2, label: "Mining & Quarrying" },
    { id: 3, label: "Infrastructure" },
    { id: 4, label: "Manufacturing" },
    { id: 5, label: "Industrial Operations" },
    { id: 6, label: "Multi-Site Enterprises" },
  ],
};

const book: BookSectionData = {
  __component: "sections.book",
  id: 5,
  heading: "Let's innovate together.",
  subtitle:
    "Tell us where your business is headed and what issues you're facing, and we'll suggest an idea or two.",
  ctaText: "Book a 30-min call",
  ctaHref: "#book",
  showForm: true,
  formFields: [
    { id: 1, label: "Full name", type: "text", placeholder: "Your name", required: true },
    { id: 2, label: "Business email", type: "email", placeholder: "you@company.com", required: true },
    { id: 3, label: "Company", type: "text", placeholder: "Company name", required: false },
    { id: 4, label: "Message", type: "textarea", placeholder: "What should we discuss?", required: false },
  ],
};

const resources: ResourcesSectionData = {
  __component: "sections.resources",
  id: 6,
  heading: "Industrial Innovation Resources",
  cards: [
    {
      id: 1,
      title: "Mining Safety Shares: Topics, Tips, and Best Practices",
      excerpt: "Mining Safety Shares: Topics, Tips, and Best Practices",
      tag: "KB&G · BLOG",
      href: "/blog/articles/mining-safety-shares-topics-tips-and-best-practices",
      imageUrl: "/images/blog/mining-safety-shares-topics-tips-and-best-practices.png",
    },
    {
      id: 2,
      title: "All About Mining: How the Mining Industry Powers the World",
      excerpt: "All About Mining: How the Mining Industry Powers the World",
      tag: "KB&G · BLOG",
      href: "/blog/articles/all-about-mining-how-the-mining-industry-powers-the-world",
      imageUrl: "/images/blog/all-about-mining-how-the-mining-industry-powers-the-world.png",
    },
    {
      id: 3,
      title: "Interpersonal Communication Skills in the Workplace: Why They Matter",
      excerpt: "Interpersonal Communication Skills in the Workplace: Why They Matter",
      tag: "KB&G · BLOG",
      href: "/blog/articles/intepersonal-communication-skills-in-the-workplace",
      imageUrl: "/images/blog/intepersonal-communication-skills-in-the-workplace.png",
    },
  ],
};

export const homeFallbackSections: StrapiSection[] = [
  hero,
  solutions,
  consulting,
  sectors,
  book,
  resources,
];
