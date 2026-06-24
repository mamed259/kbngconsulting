export interface StrapiImage {
  id: number;
  url: string;
  alternativeText: string | null;
  width?: number;
  height?: number;
}

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
}

export type AccentTheme = "yellow" | "green" | "coral" | "slate";

export interface SolutionCardData {
  id: number;
  title: string;
  body?: string;
  href?: string;
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

export type StrapiSection =
  | HeroSectionData
  | SolutionsSectionData
  | ConsultingSectionData
  | SectorsSectionData
  | BookSectionData
  | ResourcesSectionData;
