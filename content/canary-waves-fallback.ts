import type { StrapiSection } from "@/types/strapi";
import { canaryWavesContent as c } from "@/content/canary-waves";

let nextId = 1;
function id() {
  return nextId++;
}

export const canaryWavesFallbackSections: StrapiSection[] = [
  {
    __component: "sections.cw-hero",
    id: id(),
    heading: c.hero.title,
    subtitle: c.hero.subtitle,
    lead: c.hero.lead,
    imageUrl: c.hero.image,
    imageAlt: c.hero.imageAlt,
    primaryCtaText: c.hero.primaryCta.label,
    primaryCtaHref: c.hero.primaryCta.href,
    secondaryCtaText: c.hero.secondaryCta.label,
    secondaryCtaHref: c.hero.secondaryCta.href,
  },
  {
    __component: "sections.cw-stats",
    id: id(),
    label: c.stats.label,
    items: c.stats.items.map((item) => ({
      id: id(),
      value: item.value,
      label: item.label,
      source: item.source,
    })),
  },
  {
    __component: "sections.cw-insight",
    id: id(),
    kicker: c.insight.kicker,
    heading: c.insight.heading,
    promise: c.insight.promise,
    imageUrl: c.insight.image,
    imageAlt: c.insight.imageAlt,
    gapItems: c.insight.gapStrip.map((item) => ({
      id: id(),
      num: item.num,
      text: item.text,
      until: "until" in item ? item.until : undefined,
    })),
  },
  {
    __component: "sections.cw-issues",
    id: id(),
    sectionConfig: { sectionId: c.issues.id },
    kicker: c.issues.kicker,
    heading: c.issues.heading,
    promise: c.issues.promise,
    cards: c.issues.cards.map((card) => ({
      id: id(),
      title: card.title,
      quote: card.quote,
      body: card.body,
      bullets: [...card.bullets],
      forLabel: card.forLabel,
      accentTheme: card.theme,
    })),
  },
  {
    __component: "sections.cw-culture",
    id: id(),
    kicker: c.culture.kicker,
    heading: c.culture.heading,
    promise: c.culture.promise,
    cards: c.culture.cards.map((card) => ({
      id: id(),
      title: card.title,
      body: card.body,
      icon: card.icon,
      imageUrl: card.image,
      imageAlt: card.imageAlt,
    })),
  },
  {
    __component: "sections.cw-pills",
    id: id(),
    label: c.pills.label,
    items: [...c.pills.items],
  },
  {
    __component: "sections.cw-workflow",
    id: id(),
    sectionConfig: { sectionId: c.workflow.id },
    heading: c.workflow.heading,
    subtitle: c.workflow.sub,
    steps: c.workflow.steps.map((step) => ({
      id: id(),
      num: step.num,
      title: step.title,
      body: step.body,
    })),
  },
  {
    __component: "sections.cw-adopt",
    id: id(),
    kicker: c.adopt.kicker,
    heading: c.adopt.heading,
    promise: c.adopt.promise,
    footnote: c.adopt.footnote,
    cards: c.adopt.cards.map((card) => ({
      id: id(),
      title: card.title,
      body: card.body,
    })),
  },
  {
    __component: "sections.cw-quote",
    id: id(),
    text: c.quote.text,
    attr: c.quote.attr,
    footnote: c.quote.footnote,
  },
  {
    __component: "sections.cw-faq",
    id: id(),
    heading: c.faq.heading,
    items: c.faq.items.map((item) => ({
      id: id(),
      question: item.q,
      answer: item.a,
    })),
  },
  {
    __component: "sections.cw-cta",
    id: id(),
    heading: c.cta.heading,
    body: c.cta.body,
    primaryCtaText: c.cta.primary.label,
    primaryCtaHref: c.cta.primary.href,
    secondaryCtaText: c.cta.secondary.label,
    secondaryCtaHref: c.cta.secondary.href,
  },
];
