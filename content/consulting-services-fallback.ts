import type { StrapiSection } from "@/types/strapi";

let nextId = 12000;
function id() {
  return nextId++;
}

export const consultingServicesFallbackSections: StrapiSection[] = [
  {
    id: id(),
    __component: "sections.cs-hero",
    heading: "Consulting Services",
    subtitle: "Actionable strategy that moves with your operation",
    lead:
      "We advise across pricing, commercial performance, safety, and people, then build the tools and training that put it to work on the ground.",
    trustLabel: "Trusted by leaders in mining, aggregates & building materials",
    logos: [
      { id: id(), label: "Arcosa", imageUrl: "/images/consulting-services/arcosa.png" },
      { id: id(), label: "Breedon", imageUrl: "/images/consulting-services/breedon.png" },
      { id: id(), label: "Firth", imageUrl: "/images/consulting-services/firth.png" },
      { id: id(), label: "Kraemer", imageUrl: "/images/consulting-services/kraemer.png" },
      { id: id(), label: "Peckham", imageUrl: "/images/consulting-services/peckham.png" },
      { id: id(), label: "Stevenson", imageUrl: "/images/consulting-services/stevenson.png" },
    ],
  },
  {
    id: id(),
    __component: "sections.cs-service",
    themeTone: "mint",
    altBackground: false,
    kicker: "Service 01 / 04",
    heading: "Pricing for Heavy Industry",
    promise: "Know your true cost on every job and hold the price that protects your margin.",
    pills: ["Cost and mix calculators", "Pricing maturity"],
    visualKind: "pricing",
    offers: [
      {
        id: id(),
        title: "Cost and mix calculators",
        what:
          "True mix-level cost by plant, design, and pricing type, so teams price from reality instead of averages and old spreadsheets.",
        chips: [
          "Calibrated to your plants",
          "Markup gap analysis",
          "Index & transport adders",
          "Quote-ready outputs",
        ],
        result: "Real control over margin, without the guesswork.",
        audience: "Pricing managers, plant leads, sales & finance in concrete, asphalt, aggregates.",
      },
      {
        id: id(),
        title: "Pricing maturity",
        what:
          "A clear read of where your pricing really stands, and a staged plan to move up a level without skipping the fundamentals.",
        chips: [
          "How prices are set & enforced",
          "Discount & quoting logic",
          "Benchmarking",
          "Staged roadmap",
        ],
        result: "Know what's working and what to fix first.",
        audience: "Pricing teams, sales leaders, general managers, finance.",
      },
    ],
  },
  {
    id: id(),
    __component: "sections.cs-service",
    themeTone: "yellow",
    altBackground: true,
    kicker: "Service 02 / 04",
    heading: "Commercial Performance",
    promise: "See where margin leaks, measure what matters, and train your team to plug it.",
    pills: ["Diagnostic", "Scorecards and attractiveness", "Sales training"],
    visualKind: "commercial",
    offers: [
      {
        id: id(),
        title: "Diagnostic",
        what:
          "A full read of your commercial system, from strategy down to how reps actually quote, discount, and negotiate.",
        chips: ["Map the deal journey", "Governance gaps", "Deal consistency", "Process fixes"],
        result: "Pricing strategy your field actually executes.",
        audience: "Sales leaders, RevOps, pricing & commercial-excellence teams.",
      },
      {
        id: id(),
        title: "Scorecards and attractiveness",
        what:
          "Score accounts on margin and operational fit, not just revenue, co-built with your leadership team.",
        chips: ["Margin & asset-use KPIs", "Co-defined weightings", "Account scoring", "KAM rollout"],
        segments: ["Strategic Core", "Growth Plays", "Margin Risks", "Low Fit"],
        result: "See which customers build value and which drain it.",
        audience: "Sales leaders, GMs, key-account teams, ops directors.",
      },
      {
        id: id(),
        title: "Sales training",
        what: "Turn the strategy into consistent quoting and negotiation behavior on every deal.",
        chips: ["Field playbooks", "Discount defense", "Deal-review habits"],
        result: "Pricing intent that holds, deal after deal.",
        audience: "Sales managers, frontline reps, commercial leaders.",
      },
    ],
  },
  {
    id: id(),
    __component: "sections.cs-service",
    themeTone: "pink",
    altBackground: false,
    kicker: "Service 03 / 04",
    heading: "AI for Safety and Operations",
    promise: "Put AI where it protects people and uptime, tuned to your site and proven before you scale.",
    pills: ["PPE and hazard detection", "Comms intelligence", "Site-tuned models"],
    visualKind: "safety",
    offers: [
      {
        id: id(),
        title: "PPE and hazard detection",
        what:
          "Site-tuned computer vision that turns your existing camera feeds into early warnings, not after-the-fact evidence.",
        chips: [
          "PPE detection",
          "Restricted-zone & proximity",
          "Custom alert logic",
          "Dashboards & logs",
        ],
        result: "Fewer incidents, faster response, a record you can show.",
        audience: "Safety leaders and innovation teams with cameras but no custom AI.",
      },
      {
        id: id(),
        title: "Comms intelligence",
        what:
          "Voice-to-data AI that turns everyday two-way radio chatter into real-time safety and operations insight.",
        chips: ["Capture", "Transcribe (ASR)", "Analyze live", "Structured reports"],
        result: "Real-time insight from comms you already have.",
        audience: "Safety and operations leaders in mining and quarrying.",
        note: "Canary Waves, co-founded by KB&G, piloted on real mine sites.",
      },
      {
        id: id(),
        title: "Site-tuned models",
        what: "We frame the right use cases, match partners, and prove value in a pilot before you scale.",
        chips: ["Right use cases", "Partner management", "Pilot to scale", "Strategist & integrator"],
        result: "AI that fits your site, built with you not sold to you.",
        audience: "Digital and innovation execs who want field partners, not vendors.",
      },
    ],
  },
  {
    id: id(),
    __component: "sections.cs-service",
    themeTone: "slate",
    altBackground: true,
    kicker: "Service 04 / 04",
    heading: "Soft Skill Development",
    promise: "Build the everyday conversations that protect safety, performance and wellbeing.",
    pills: ["Safety communication", "Leadership and feedback", "Wellbeing"],
    visualKind: "soft-skills",
    offers: [
      {
        id: id(),
        title: "Safety communication",
        what:
          "Coaching and scenario role-play for how teams speak up, hand over, and raise concerns under pressure.",
        chips: ["Handovers & toolbox talks", "Stop-work conversations", "Scenario role-play"],
        result: "Clear communication before a near-miss becomes an incident.",
        audience: "Site supervisors, safety leads, frontline crews.",
        note: "Pairs with Georgia, our AI coaching tool.",
      },
      {
        id: id(),
        title: "Leadership and feedback",
        what: "Practical leadership for the people who run shifts, crews, and sites.",
        chips: ["Everyday coaching habits", "Holding standards", "Cross-layer handoffs"],
        result: "Leaders who develop teams, not just manage them.",
        audience: "Supervisors, foremen, plant managers, emerging leaders.",
      },
      {
        id: id(),
        title: "Wellbeing",
        what: "A grounded approach to wellbeing, built for shift work and demanding sites.",
        chips: ["Fatigue & stress awareness", "Simple check-ins", "Tied to safety & performance"],
        result: "A workforce that stays safer, sharper, more engaged.",
        audience: "Site leadership, HR, safety teams.",
      },
    ],
  },
  {
    id: id(),
    __component: "sections.cs-abe",
    heading: "How every engagement works",
    lead:
      "Whichever service you start with, the shape is the same. We advise, we build the tool, and we leave your team able to run it.",
    steps: [
      {
        id: id(),
        number: "1",
        title: "Advise",
        body:
          "We read the real operation on the ground and find where margin, safety, or performance is slipping.",
      },
      {
        id: id(),
        number: "2",
        title: "Build",
        body:
          "We build the calculator, model, or AI tool your teams will use day to day, tuned to your sites.",
      },
      {
        id: id(),
        number: "3",
        title: "Embed",
        body:
          "We train your people and wire it into how they already work, so the change holds after we step back.",
      },
    ],
  },
  {
    id: id(),
    __component: "sections.cs-quote",
    body: "We don't stop at strategy. We build what comes next. Keep building and growing.",
  },
  {
    id: id(),
    __component: "sections.cs-cta",
    heading: "Ready to move on one of these?",
    body:
      "Tell us where your operation is headed and what's slowing it down. We'll point at the service that fixes it first.",
    ctaText: "Let's talk",
    ctaHref: "https://kbngconsulting.com/contacts",
  },
];
