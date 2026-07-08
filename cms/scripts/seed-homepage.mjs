import process from "node:process";

const STRAPI_URL = (process.env.STRAPI_URL || "http://localhost:1337")
  .trim()
  .replace(/\/+$/, "")
  .replace(/\/admin$/, "")
  .replace(/\/api$/, "");
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_TOKEN) {
  console.error("Missing STRAPI_API_TOKEN. Export it before running seed.");
  process.exit(1);
}

const homeData = {
  title: "Home",
  slug: "home",
  seo: {
    metaTitle: "KB&G · Industrial Innovation Studio",
    metaDescription:
      "AI solutions built for heavy industry, plus consulting tailored to your operations.",
    canonicalUrl: "https://kbng.netlify.app/",
  },
  sections: [
    {
      __component: "sections.hero",
      heading: "Innovation for heavy industry",
      subtitle:
        "Serving mining, quarrying, and heavy operations, we build real-world systems that elevate your teams. This includes corporate AI role-play for soft skills and AI safety intelligence for mining and quarrying operations.",
      primaryCtaText: "Let's talk",
      primaryCtaHref: "#book",
      secondaryCtaText: "See what we build",
      secondaryCtaHref: "#solutions",
    },
    {
      __component: "sections.solutions",
      heading: "Innovation Studio: Industrial AI and Human Performance at Work",
      intro:
        "We work with asset-intensive operations to accelerate digital transformation and industrial AI adoption. Our innovation consulting and AI-powered training systems strengthen human performance and improve how teams learn, operate, and make decisions.",
      cards: [
        {
          title: "Canary Waves",
          body:
            "Canary Waves turns the two-way radio traffic already running across a site into real-time safety intelligence, surfacing collision risks, flagged hazards, and missed protocols to leadership before they reach the incident report. It runs passively on existing infrastructure, with no change to frontline operations.",
          href: "https://canary-waves.com/",
          accentTheme: "yellow",
        },
        {
          title: "Georgia",
          body:
            "Georgia is an AI role-play platform that trains teams for high-stakes moments: holding price under pressure, de-escalating an unhappy client before they walk away, giving feedback before it becomes a crisis. Knowing what to say is not the same as saying it under pressure, so Georgia builds the skill through short, personalized practice. Built in the field, for construction, mining, and building materials.",
          href: "https://www.georgia-app.com/",
          accentTheme: "green",
        },
        {
          title: "Vision AI",
          body: "Real-time safety and PPE monitoring via existing camera systems.",
          accentTheme: "yellow",
        },
        {
          title: "Market Analysis",
          body: "Localized demand and pricing intelligence for aggregates.",
          accentTheme: "green",
        },
        {
          title: "Configure Price Quote",
          body: "End-to-end building-materials quoting and pricing.",
          accentTheme: "coral",
        },
      ],
    },
    {
      __component: "sections.consulting",
      heading: "Consulting Services",
      cards: [
        {
          title: "Pricing for Heavy Industry",
          body: "Know your true cost on every job and hold the price that protects your margin.",
          href: "#book",
          tags: ["Cost and mix calculators", "Pricing maturity"],
          accentTheme: "green",
        },
        {
          title: "Commercial Performance",
          body: "See where margin leaks, measure what matters, and train your team to plug it.",
          href: "#book",
          tags: ["Diagnostic", "Scorecards and attractiveness", "Sales training"],
          accentTheme: "green",
        },
        {
          title: "AI for Safety and Operations",
          body: "Put AI where it protects people and uptime, tuned to your site and proven before you scale.",
          href: "#book",
          tags: ["PPE and hazard detection", "Comms intelligence", "Site-tuned models"],
          accentTheme: "green",
        },
        {
          title: "Soft Skill Development",
          body: "Build the everyday conversations that protect safety, performance and wellbeing.",
          href: "#book",
          tags: ["Safety communication", "Leadership and feedback", "Wellbeing"],
          accentTheme: "green",
        },
      ],
    },
    {
      __component: "sections.sectors",
      heading: "Sectors we serve",
      items: [
        { label: "Construction Materials" },
        { label: "Mining & Quarrying" },
        { label: "Infrastructure" },
        { label: "Manufacturing" },
        { label: "Industrial Operations" },
        { label: "Multi-Site Enterprises" },
      ],
    },
    {
      __component: "sections.book",
      heading: "Let's innovate together.",
      subtitle:
        "Tell us where your business is headed and what issues you're facing, and we'll suggest an idea or two.",
      ctaText: "Book a 30-min call",
      ctaHref: "#book",
      showForm: true,
      formFields: [
        {
          label: "Full name",
          type: "text",
          placeholder: "Your name",
          required: true,
        },
        {
          label: "Business email",
          type: "email",
          placeholder: "you@company.com",
          required: true,
        },
        {
          label: "Company",
          type: "text",
          placeholder: "Company name",
          required: false,
        },
        {
          label: "Message",
          type: "textarea",
          placeholder: "What should we discuss?",
          required: false,
        },
      ],
    },
    {
      __component: "sections.resources",
      heading: "Industrial Innovation Resources",
      cards: [
        {
          title: "Vision AI for Dummies: From Gold Mines to Luxury Bags",
          excerpt: "Training Vision AI Model",
          tag: "KB&G - CONSULTING",
          href: "#",
        },
        {
          title: "The Hidden Cause of Customer Success Burnout",
          excerpt: "Customer Success Burnout",
          tag: "KB&G - CONSULTING",
          href: "#",
        },
        {
          title: "Essential Solutions for Safer Mining Operations",
          excerpt: "Mining Safety Equipment",
          tag: "KB&G - CONSULTING",
          href: "#",
        },
      ],
    },
  ],
};

async function strapiRequest(path, init = {}) {
  const response = await fetch(`${STRAPI_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_TOKEN}`,
      ...(init.headers || {}),
    },
  });

  const text = await response.text();
  let body = null;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = text;
  }

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} -> ${JSON.stringify(body)}`);
  }

  return body;
}

async function run() {
  const findQuery = new URLSearchParams();
  findQuery.set("filters[slug][$eq]", "home");
  findQuery.set("status", "draft");

  const existing = await strapiRequest(`/api/pages?${findQuery.toString()}`);
  const first = existing?.data?.[0];

  const payload = {
    data: {
      ...homeData,
      publishedAt: new Date().toISOString(),
    },
  };

  if (first) {
    const idOrDoc = first.documentId || first.id;
    const updated = await strapiRequest(`/api/pages/${idOrDoc}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
    console.log("Updated home page:", updated?.data?.id || idOrDoc);
    return;
  }

  const created = await strapiRequest("/api/pages", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  console.log("Created home page:", created?.data?.id || created?.data?.documentId);
}

run().catch((error) => {
  console.error("Seed failed:", error.message);
  process.exit(1);
});
