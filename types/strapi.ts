export interface StrapiImage {
  id: number;
  url: string;
  alternativeText: string | null;
  width?: number;
  height?: number;
}

export type StrapiMediaField =
  | StrapiImage
  | {
      data?: StrapiImage | null;
    }
  | null;

export interface StrapiCollectionResponse<T> {
  data: Array<T & { id: number; documentId?: string }>;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface SeoData {
  metaTitle: string;
  metaDescription: string;
  canonicalUrl?: string;
  ogImage?: StrapiImage;
}

export type SectionTheme = "white" | "dark" | "teal";

export interface SectionConfig {
  sectionId?: string;
  theme?: SectionTheme;
}

export interface PageData {
  id: number;
  documentId?: string;
  slug: string;
  title: string;
  seo?: SeoData;
  sections: StrapiSection[];
}

export interface HeroSectionData {
  __component: "sections.hero";
  id: number;
  sectionConfig?: SectionConfig;
  eyebrow?: string;
  heading: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  image?: StrapiMediaField;
  imageUrl?: string;
}

export type AccentTheme = "yellow" | "green" | "coral" | "slate";

export interface SolutionCardData {
  id: number;
  title: string;
  body?: string;
  href?: string;
  image?: StrapiMediaField;
  imageUrl?: string;
  accentTheme?: AccentTheme;
}

export interface SolutionsSectionData {
  __component: "sections.solutions";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  intro?: string;
  cards: SolutionCardData[];
}

export interface ConsultingCardData {
  id: number;
  title: string;
  body?: string;
  href?: string;
  image?: StrapiMediaField;
  imageUrl?: string;
  tags?: string[];
  accentTheme?: AccentTheme;
}

export interface ConsultingSectionData {
  __component: "sections.consulting";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  cards: ConsultingCardData[];
}

export interface SectorItemData {
  id: number;
  label: string;
  image?: StrapiMediaField;
  imageUrl?: string;
}

export interface SectorsSectionData {
  __component: "sections.sectors";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  items: SectorItemData[];
}

export interface FormFieldData {
  id: number;
  label: string;
  type: "text" | "email" | "textarea";
  placeholder?: string;
  required?: boolean;
}

export interface BookSectionData {
  __component: "sections.book";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  showForm?: boolean;
  formFields?: FormFieldData[];
}

export interface ResourceCardData {
  id: number;
  title: string;
  excerpt?: string;
  href?: string;
  image?: StrapiMediaField;
  imageUrl?: string;
  tag?: string;
}

export interface ResourcesSectionData {
  __component: "sections.resources";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  cards: ResourceCardData[];
}

export type CwAccentTheme = "coral" | "yellow";
export type CwCultureIconType = "radio" | "tone" | "network";

export interface CwStatItemData {
  id: number;
  value: string;
  label: string;
  source?: string;
}

export interface CwGapItemData {
  id: number;
  num: string;
  text: string;
  until?: string;
}

export interface CwIssueCardData {
  id: number;
  title: string;
  quote?: string;
  body?: string;
  bullets?: unknown;
  forLabel?: string;
  accentTheme?: CwAccentTheme;
}

export interface CwCultureCardData {
  id: number;
  title: string;
  body?: string;
  icon?: CwCultureIconType;
  image?: StrapiMediaField;
  imageUrl?: string;
  imageAlt?: string;
}

export interface CwWorkflowStepData {
  id: number;
  num: string;
  title: string;
  body?: string;
}

export interface CwAdoptCardData {
  id: number;
  title: string;
  body?: string;
}

export interface FaqItemData {
  id: number;
  question: string;
  answer: string;
}

export interface CwHeroSectionData {
  __component: "sections.cw-hero";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  subtitle?: string;
  lead?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  image?: StrapiMediaField;
  imageUrl?: string;
  imageAlt?: string;
}

export interface CwStatsSectionData {
  __component: "sections.cw-stats";
  id: number;
  sectionConfig?: SectionConfig;
  label?: string;
  items: CwStatItemData[];
}

export interface CwInsightSectionData {
  __component: "sections.cw-insight";
  id: number;
  sectionConfig?: SectionConfig;
  kicker?: string;
  heading: string;
  promise?: string;
  image?: StrapiMediaField;
  imageUrl?: string;
  imageAlt?: string;
  gapItems?: CwGapItemData[];
}

export interface CwIssuesSectionData {
  __component: "sections.cw-issues";
  id: number;
  sectionConfig?: SectionConfig;
  kicker?: string;
  heading: string;
  promise?: string;
  cards: CwIssueCardData[];
}

export interface CwCultureSectionData {
  __component: "sections.cw-culture";
  id: number;
  sectionConfig?: SectionConfig;
  kicker?: string;
  heading: string;
  promise?: string;
  cards: CwCultureCardData[];
}

export interface CwPillsSectionData {
  __component: "sections.cw-pills";
  id: number;
  sectionConfig?: SectionConfig;
  label?: string;
  items?: unknown;
}

export interface CwWorkflowSectionData {
  __component: "sections.cw-workflow";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  subtitle?: string;
  steps: CwWorkflowStepData[];
}

export interface CwAdoptSectionData {
  __component: "sections.cw-adopt";
  id: number;
  sectionConfig?: SectionConfig;
  kicker?: string;
  heading: string;
  promise?: string;
  footnote?: string;
  cards: CwAdoptCardData[];
}

export interface CwQuoteSectionData {
  __component: "sections.cw-quote";
  id: number;
  sectionConfig?: SectionConfig;
  text: string;
  attr?: string;
  footnote?: string;
}

export interface CwFaqSectionData {
  __component: "sections.cw-faq";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  items: FaqItemData[];
}

export interface CwCtaSectionData {
  __component: "sections.cw-cta";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  body?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export type StrapiSection =
  | HeroSectionData
  | SolutionsSectionData
  | ConsultingSectionData
  | SectorsSectionData
  | BookSectionData
  | ResourcesSectionData
  | CwHeroSectionData
  | CwStatsSectionData
  | CwInsightSectionData
  | CwIssuesSectionData
  | CwCultureSectionData
  | CwPillsSectionData
  | CwWorkflowSectionData
  | CwAdoptSectionData
  | CwQuoteSectionData
  | CwFaqSectionData
  | CwCtaSectionData;
