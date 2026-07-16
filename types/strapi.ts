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

export interface ArticleData {
  id: number;
  documentId?: string;
  slug: string;
  title: string;
  excerpt?: string;
  publishedOn: string;
  coverImage?: StrapiMediaField;
  coverImageUrl?: string;
  coverImageAlt?: string;
  body: string;
  seo?: SeoData;
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

export type VaBuildIconType = "safety" | "count" | "brand" | "photo";
export type VaExampleTheme = "coral" | "yellow" | "blue" | "mint";
export type VaLensTheme = "mint" | "slate" | "yellow" | "coral" | "blue";

export interface VaBuildCardData {
  id: number;
  title: string;
  body?: string;
  icon?: VaBuildIconType;
  image?: StrapiMediaField;
  imageUrl?: string;
  imageAlt?: string;
}

export interface VaExampleCardData {
  id: number;
  title: string;
  body?: string;
  bullets?: unknown;
  forLabel?: string;
  accentTheme?: VaExampleTheme;
}

export interface VaLensCardData {
  id: number;
  title: string;
  bullets?: unknown;
  accentTheme?: VaLensTheme;
}

export interface VaAudienceCardData {
  id: number;
  title: string;
  body?: string;
}

export interface VaWorkflowStepData {
  id: number;
  num: string;
  title: string;
  body?: string;
}

export interface VaHeroSectionData {
  __component: "sections.va-hero";
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

export interface VaInsightSectionData {
  __component: "sections.va-insight";
  id: number;
  sectionConfig?: SectionConfig;
  kicker?: string;
  heading: string;
  promise?: string;
}

export interface VaBuildSectionData {
  __component: "sections.va-build";
  id: number;
  sectionConfig?: SectionConfig;
  kicker?: string;
  heading: string;
  promise?: string;
  cards: VaBuildCardData[];
}

export interface VaExamplesSectionData {
  __component: "sections.va-examples";
  id: number;
  sectionConfig?: SectionConfig;
  kicker?: string;
  heading: string;
  promise?: string;
  cards: VaExampleCardData[];
}

export interface VaLensSectionData {
  __component: "sections.va-lens";
  id: number;
  sectionConfig?: SectionConfig;
  kicker?: string;
  heading: string;
  promise?: string;
  footnote?: string;
  cards: VaLensCardData[];
}

export interface VaAudienceSectionData {
  __component: "sections.va-audience";
  id: number;
  sectionConfig?: SectionConfig;
  kicker?: string;
  heading: string;
  cards: VaAudienceCardData[];
}

export interface VaWorkflowSectionData {
  __component: "sections.va-workflow";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  subtitle?: string;
  steps: VaWorkflowStepData[];
}

export interface VaQuoteSectionData {
  __component: "sections.va-quote";
  id: number;
  sectionConfig?: SectionConfig;
  text: string;
  attr?: string;
}

export interface VaFaqSectionData {
  __component: "sections.va-faq";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  items: FaqItemData[];
}

export interface VaCtaSectionData {
  __component: "sections.va-cta";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  body?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export type IsKickerTone = "default" | "yellow" | "pink";

export interface IsChipData {
  id: number;
  label: string;
  href?: string;
  targetId?: string;
}

export interface IsPillarData {
  id: number;
  title: string;
  body?: string;
}

export interface IsProductCardData {
  id: number;
  anchorId?: string;
  kicker?: string;
  kickerTone?: IsKickerTone;
  title: string;
  subtitle?: string;
  body?: string;
  whoFor?: string;
  proof?: string;
  features?: unknown;
  statValue?: string;
  statLabel?: string;
  flip?: boolean;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  image?: StrapiMediaField;
  imageUrl?: string;
  imageAlt?: string;
}

export interface IsAudienceColData {
  id: number;
  role?: string;
  heading: string;
  items?: unknown;
  variant?: "default" | "alt";
}

export interface IsHeroSectionData {
  __component: "sections.is-hero";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  headingHighlight?: string;
  lead?: string;
  trustLabel?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  image?: StrapiMediaField;
  imageUrl?: string;
  imageAlt?: string;
}

export interface IsBrandbarSectionData {
  __component: "sections.is-brandbar";
  id: number;
  label?: string;
  chips: IsChipData[];
}

export interface IsThesisSectionData {
  __component: "sections.is-thesis";
  id: number;
  heading: string;
  lead?: string;
  body?: string;
  pillars: IsPillarData[];
}

export interface IsProductsSectionData {
  __component: "sections.is-products";
  id: number;
  sectionConfig?: SectionConfig;
  spineYear?: string;
  spineLabel?: string;
  heading: string;
  lead?: string;
  cards: IsProductCardData[];
}

export interface IsFoundersSectionData {
  __component: "sections.is-founders";
  id: number;
  heading: string;
  body?: string;
  roles?: unknown;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  cardEyebrow?: string;
  cardTitle?: string;
  cardBody?: string;
  cardCtaText?: string;
  cardCtaHref?: string;
}

export interface IsAudienceSectionData {
  __component: "sections.is-audience";
  id: number;
  heading: string;
  columns: IsAudienceColData[];
}

export interface IsBridgeSectionData {
  __component: "sections.is-bridge";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  lead?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  pillars: IsPillarData[];
}

export interface IsCtaSectionData {
  __component: "sections.is-cta";
  id: number;
  body: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export interface CsLogoData {
  id: number;
  label: string;
  image?: StrapiMediaField;
  imageUrl?: string;
}

export interface CsOfferData {
  id: number;
  title: string;
  what?: string;
  chips?: unknown;
  result?: string;
  audience?: string;
  note?: string;
  segments?: unknown;
}

export interface CsStepData {
  id: number;
  number: string;
  title: string;
  body?: string;
}

export interface CsHeroSectionData {
  __component: "sections.cs-hero";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  subtitle?: string;
  lead?: string;
  trustLabel?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  logos?: CsLogoData[];
}

export interface CsServiceSectionData {
  __component: "sections.cs-service";
  id: number;
  sectionConfig?: SectionConfig;
  themeTone?: "mint" | "yellow" | "pink" | "slate";
  altBackground?: boolean;
  kicker?: string;
  heading: string;
  promise?: string;
  pills?: unknown;
  visualKind?: "pricing" | "commercial" | "safety" | "soft-skills" | "image";
  image?: StrapiMediaField;
  imageUrl?: string;
  imageAlt?: string;
  offers?: CsOfferData[];
}

export interface CsAbeSectionData {
  __component: "sections.cs-abe";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  lead?: string;
  steps?: CsStepData[];
}

export interface CsQuoteSectionData {
  __component: "sections.cs-quote";
  id: number;
  sectionConfig?: SectionConfig;
  body: string;
}

export interface CsCtaSectionData {
  __component: "sections.cs-cta";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  body?: string;
  ctaText?: string;
  ctaHref?: string;
}

export type AuAccentTone = "yellow" | "mint" | "coral" | "blue";

export interface AuMilestoneData {
  id: number;
  year: string;
  label: string;
  description?: string;
}

export interface AuMemberData {
  id: number;
  name: string;
  role: string;
  bio?: string;
  image?: StrapiMediaField;
  imageUrl?: string;
  accentTone?: AuAccentTone;
}

export interface AuHeroSectionData {
  __component: "sections.au-hero";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  headingHighlight?: string;
  lead?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
}

export interface AuMissionSectionData {
  __component: "sections.au-mission";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  body: string;
}

export interface AuStorySectionData {
  __component: "sections.au-story";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  body: string;
}

export interface AuMeaningSectionData {
  __component: "sections.au-meaning";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  title: string;
  body: string;
}

export interface AuTimelineSectionData {
  __component: "sections.au-timeline";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  items: AuMilestoneData[];
}

export interface AuTeamSectionData {
  __component: "sections.au-team";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  members: AuMemberData[];
}

export interface AuCtaSectionData {
  __component: "sections.au-cta";
  id: number;
  sectionConfig?: SectionConfig;
  heading: string;
  body?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  contactLabel?: string;
  contactEmail?: string;
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
  | CwCtaSectionData
  | VaHeroSectionData
  | VaInsightSectionData
  | VaBuildSectionData
  | VaExamplesSectionData
  | VaLensSectionData
  | VaAudienceSectionData
  | VaWorkflowSectionData
  | VaQuoteSectionData
  | VaFaqSectionData
  | VaCtaSectionData
  | IsHeroSectionData
  | IsBrandbarSectionData
  | IsThesisSectionData
  | IsProductsSectionData
  | IsFoundersSectionData
  | IsAudienceSectionData
  | IsBridgeSectionData
  | IsCtaSectionData
  | CsHeroSectionData
  | CsServiceSectionData
  | CsAbeSectionData
  | CsQuoteSectionData
  | CsCtaSectionData
  | AuHeroSectionData
  | AuMissionSectionData
  | AuStorySectionData
  | AuMeaningSectionData
  | AuTimelineSectionData
  | AuTeamSectionData
  | AuCtaSectionData;
