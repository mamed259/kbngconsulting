import process from "node:process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { uploadMediaFile } from "./lib/upload-media.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");

const STRAPI_URL = (process.env.STRAPI_URL || "http://localhost:1337")
  .trim()
  .replace(/\/+$/, "")
  .replace(/\/admin$/, "")
  .replace(/\/api$/, "");
const STRAPI_TOKEN = process.env.STRAPI_SEED_TOKEN || process.env.STRAPI_API_TOKEN;

if (!STRAPI_TOKEN) {
  console.error("Missing STRAPI_SEED_TOKEN or STRAPI_API_TOKEN. Export one before running seed.");
  process.exit(1);
}

async function upload(relPath, fileName, alt) {
  const result = await uploadMediaFile({
    strapiUrl: STRAPI_URL,
    token: STRAPI_TOKEN,
    filePath: join(ROOT, relPath),
    fileName,
    alt,
  });
  if (!result?.id) {
    console.warn(`[home] missing media for ${relPath}`);
    return null;
  }
  console.log(`[home] uploaded ${fileName} -> ${result.id}`);
  return result.id;
}

async function buildHomeData() {
  const [
    heartId,
    flagship1Id,
    flagship2Id,
    tileVisionId,
    tileMarketId,
    tileCpqId,
    sectorConstructionId,
    sectorMiningId,
    sectorInfraId,
    sectorMfgId,
    sectorIndustrialId,
    sectorMultiId,
  ] = await Promise.all([
    upload("public/images/home/heart.png", "home-heart.png", "KB&G industrial innovation"),
    upload("public/images/home/flagship-1.jpg", "home-flagship-canary.jpg", "Canary Waves"),
    upload("public/images/home/flagship-2.jpg", "home-flagship-georgia.jpg", "Georgia"),
    upload("public/images/home/tile-vision.jpg", "home-tile-vision.jpg", "Vision AI"),
    upload("public/images/home/tile-market.jpg", "home-tile-market.jpg", "Market Analysis"),
    upload("public/images/home/tile-cpq.jpg", "home-tile-cpq.jpg", "Configure Price Quote"),
    upload(
      "public/images/home/sector-construction-materials.jpg",
      "home-sector-construction.jpg",
      "Construction Materials",
    ),
    upload(
      "public/images/home/sector-mining-quarrying.jpg",
      "home-sector-mining.jpg",
      "Mining & Quarrying",
    ),
    upload(
      "public/images/home/sector-infrastructure.jpg",
      "home-sector-infrastructure.jpg",
      "Infrastructure",
    ),
    upload(
      "public/images/home/sector-manufacturing.jpg",
      "home-sector-manufacturing.jpg",
      "Manufacturing",
    ),
    upload(
      "public/images/home/sector-industrial-operations.jpg",
      "home-sector-industrial.jpg",
      "Industrial Operations",
    ),
    upload(
      "public/images/home/sector-multi-site.jpg",
      "home-sector-multi-site.jpg",
      "Multi-Site Enterprises",
    ),
  ]);

  return {
    title: "Home",
    slug: "home",
    seo: {
      metaTitle: "KB&G · Industrial Innovation Studio",
      metaDescription:
        "AI solutions built for heavy industry, plus consulting tailored to your operations.",
      canonicalUrl: "https://kbngconsulting.com/",
      ...(heartId ? { ogImage: heartId } : {}),
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
        ...(heartId ? { image: heartId } : {}),
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
            ...(flagship1Id ? { image: flagship1Id } : {}),
          },
          {
            title: "Georgia",
            body:
              "Georgia is an AI role-play platform that trains teams for high-stakes moments: holding price under pressure, de-escalating an unhappy client before it becomes a crisis. Knowing what to say is not the same as saying it under pressure, so Georgia builds the skill through short, personalized practice. Built in the field, for construction, mining, and building materials.",
            href: "https://www.georgia-app.com/",
            accentTheme: "green",
            ...(flagship2Id ? { image: flagship2Id } : {}),
          },
          {
            title: "Vision AI",
            body: "Real-time safety and PPE monitoring via existing camera systems.",
            accentTheme: "yellow",
            ...(tileVisionId ? { image: tileVisionId } : {}),
          },
          {
            title: "Market Analysis",
            body: "Localized demand and pricing intelligence for aggregates.",
            accentTheme: "green",
            ...(tileMarketId ? { image: tileMarketId } : {}),
          },
          {
            title: "Configure Price Quote",
            body: "End-to-end building-materials quoting and pricing.",
            accentTheme: "coral",
            ...(tileCpqId ? { image: tileCpqId } : {}),
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
          {
            label: "Construction Materials",
            ...(sectorConstructionId ? { image: sectorConstructionId } : {}),
          },
          {
            label: "Mining & Quarrying",
            ...(sectorMiningId ? { image: sectorMiningId } : {}),
          },
          {
            label: "Infrastructure",
            ...(sectorInfraId ? { image: sectorInfraId } : {}),
          },
          {
            label: "Manufacturing",
            ...(sectorMfgId ? { image: sectorMfgId } : {}),
          },
          {
            label: "Industrial Operations",
            ...(sectorIndustrialId ? { image: sectorIndustrialId } : {}),
          },
          {
            label: "Multi-Site Enterprises",
            ...(sectorMultiId ? { image: sectorMultiId } : {}),
          },
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
          { label: "Full name", type: "text", placeholder: "Your name", required: true },
          { label: "Business email", type: "email", placeholder: "you@company.com", required: true },
          { label: "Company", type: "text", placeholder: "Company name", required: false },
          { label: "Message", type: "textarea", placeholder: "What should we discuss?", required: false },
        ],
      },
      {
        __component: "sections.resources",
        heading: "Industrial Innovation Resources",
        cards: [],
      },
    ],
  };
}

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
  const homeData = await buildHomeData();

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
    console.log(
      "Updated home page:",
      updated?.data?.id || idOrDoc,
      homeData.seo.ogImage ? `(og/heart media ${homeData.seo.ogImage})` : "",
    );
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
