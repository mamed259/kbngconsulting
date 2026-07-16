import type { StrapiSection } from "@/types/strapi";
import { HeroSection } from "@/components/sections/HeroSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { ConsultingSection } from "@/components/sections/ConsultingSection";
import { SectorsSection } from "@/components/sections/SectorsSection";
import { BookSection } from "@/components/sections/BookSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { CwHeroSection } from "@/components/sections/cw/CwHeroSection";
import { CwStatsSection } from "@/components/sections/cw/CwStatsSection";
import { CwInsightSection } from "@/components/sections/cw/CwInsightSection";
import { CwIssuesSection } from "@/components/sections/cw/CwIssuesSection";
import { CwCultureSection } from "@/components/sections/cw/CwCultureSection";
import { CwPillsSection } from "@/components/sections/cw/CwPillsSection";
import { CwWorkflowSection } from "@/components/sections/cw/CwWorkflowSection";
import { CwAdoptSection } from "@/components/sections/cw/CwAdoptSection";
import { CwQuoteSection } from "@/components/sections/cw/CwQuoteSection";
import { CwFaqSection } from "@/components/sections/cw/CwFaqSection";
import { CwCtaSection } from "@/components/sections/cw/CwCtaSection";
import { VaHeroSection } from "@/components/sections/va/VaHeroSection";
import { VaInsightSection } from "@/components/sections/va/VaInsightSection";
import { VaBuildSection } from "@/components/sections/va/VaBuildSection";
import { VaExamplesSection } from "@/components/sections/va/VaExamplesSection";
import { VaLensSection } from "@/components/sections/va/VaLensSection";
import { VaAudienceSection } from "@/components/sections/va/VaAudienceSection";
import { VaWorkflowSection } from "@/components/sections/va/VaWorkflowSection";
import { VaQuoteSection } from "@/components/sections/va/VaQuoteSection";
import { VaFaqSection } from "@/components/sections/va/VaFaqSection";
import { VaCtaSection } from "@/components/sections/va/VaCtaSection";
import { IsHeroSection } from "@/components/sections/is/IsHeroSection";
import { IsBrandbarSection } from "@/components/sections/is/IsBrandbarSection";
import { IsThesisSection } from "@/components/sections/is/IsThesisSection";
import { IsProductsSection } from "@/components/sections/is/IsProductsSection";
import { IsFoundersSection } from "@/components/sections/is/IsFoundersSection";
import { IsAudienceSection } from "@/components/sections/is/IsAudienceSection";
import { IsBridgeSection } from "@/components/sections/is/IsBridgeSection";
import { IsCtaSection } from "@/components/sections/is/IsCtaSection";
import { CsHeroSection } from "@/components/sections/cs/CsHeroSection";
import { CsServiceSection } from "@/components/sections/cs/CsServiceSection";
import { CsAbeSection } from "@/components/sections/cs/CsAbeSection";
import { CsQuoteSection } from "@/components/sections/cs/CsQuoteSection";
import { CsCtaSection } from "@/components/sections/cs/CsCtaSection";
import { AuHeroSection } from "@/components/sections/au/AuHeroSection";
import { AuMissionSection } from "@/components/sections/au/AuMissionSection";
import { AuStorySection } from "@/components/sections/au/AuStorySection";
import { AuMeaningSection } from "@/components/sections/au/AuMeaningSection";
import { AuTimelineSection } from "@/components/sections/au/AuTimelineSection";
import { AuTeamSection } from "@/components/sections/au/AuTeamSection";
import { AuCtaSection } from "@/components/sections/au/AuCtaSection";
import { GeHeroSection } from "@/components/sections/ge/GeHeroSection";
import { GeStatsSection } from "@/components/sections/ge/GeStatsSection";
import { GeServiceSection } from "@/components/sections/ge/GeServiceSection";
import { GeAbeSection } from "@/components/sections/ge/GeAbeSection";
import { GeAudienceSection } from "@/components/sections/ge/GeAudienceSection";
import { GeQuoteSection } from "@/components/sections/ge/GeQuoteSection";
import { GeRoleSection } from "@/components/sections/ge/GeRoleSection";
import { GeFaqSection } from "@/components/sections/ge/GeFaqSection";
import { GeCtaSection } from "@/components/sections/ge/GeCtaSection";

interface DynamicRendererProps {
  sections: StrapiSection[];
}

export function isCanaryWavesPage(sections: StrapiSection[]): boolean {
  return sections.some((section) => section.__component.startsWith("sections.cw-"));
}

export function isVisionAiPage(sections: StrapiSection[]): boolean {
  return sections.some((section) => section.__component.startsWith("sections.va-"));
}

export function isInnovationStudioPage(sections: StrapiSection[]): boolean {
  return sections.some((section) => section.__component.startsWith("sections.is-"));
}

export function isConsultingServicesPage(sections: StrapiSection[]): boolean {
  return sections.some((section) => section.__component.startsWith("sections.cs-"));
}

export function isAboutUsPage(sections: StrapiSection[]): boolean {
  return sections.some((section) => section.__component.startsWith("sections.au-"));
}

export function isGeorgiaPage(sections: StrapiSection[]): boolean {
  return sections.some((section) => section.__component.startsWith("sections.ge-"));
}

function renderSection(section: StrapiSection, index: number): React.ReactNode {
  switch (section.__component) {
    case "sections.hero": {
      const { __component, ...props } = section;
      return <HeroSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.solutions": {
      const { __component, ...props } = section;
      return <SolutionsSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.consulting": {
      const { __component, ...props } = section;
      return <ConsultingSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.sectors": {
      const { __component, ...props } = section;
      return <SectorsSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.book": {
      const { __component, ...props } = section;
      return <BookSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.resources": {
      const { __component, ...props } = section;
      return <ResourcesSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.cw-hero": {
      const { __component, ...props } = section;
      return <CwHeroSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.cw-stats": {
      const { __component, ...props } = section;
      return <CwStatsSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.cw-insight": {
      const { __component, ...props } = section;
      return <CwInsightSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.cw-issues": {
      const { __component, ...props } = section;
      return <CwIssuesSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.cw-culture": {
      const { __component, ...props } = section;
      return <CwCultureSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.cw-pills": {
      const { __component, ...props } = section;
      return <CwPillsSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.cw-workflow": {
      const { __component, ...props } = section;
      return <CwWorkflowSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.cw-adopt": {
      const { __component, ...props } = section;
      return <CwAdoptSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.cw-quote": {
      const { __component, ...props } = section;
      return <CwQuoteSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.cw-faq": {
      const { __component, ...props } = section;
      return <CwFaqSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.cw-cta": {
      const { __component, ...props } = section;
      return <CwCtaSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.va-hero": {
      const { __component, ...props } = section;
      return <VaHeroSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.va-insight": {
      const { __component, ...props } = section;
      return <VaInsightSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.va-build": {
      const { __component, ...props } = section;
      return <VaBuildSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.va-examples": {
      const { __component, ...props } = section;
      return <VaExamplesSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.va-lens": {
      const { __component, ...props } = section;
      return <VaLensSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.va-audience": {
      const { __component, ...props } = section;
      return <VaAudienceSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.va-workflow": {
      const { __component, ...props } = section;
      return <VaWorkflowSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.va-quote": {
      const { __component, ...props } = section;
      return <VaQuoteSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.va-faq": {
      const { __component, ...props } = section;
      return <VaFaqSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.va-cta": {
      const { __component, ...props } = section;
      return <VaCtaSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.is-hero": {
      const { __component, ...props } = section;
      return <IsHeroSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.is-brandbar": {
      const { __component, ...props } = section;
      return <IsBrandbarSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.is-thesis": {
      const { __component, ...props } = section;
      return <IsThesisSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.is-products": {
      const { __component, ...props } = section;
      return <IsProductsSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.is-founders": {
      const { __component, ...props } = section;
      return <IsFoundersSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.is-audience": {
      const { __component, ...props } = section;
      return <IsAudienceSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.is-bridge": {
      const { __component, ...props } = section;
      return <IsBridgeSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.is-cta": {
      const { __component, ...props } = section;
      return <IsCtaSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.cs-hero": {
      const { __component, ...props } = section;
      return <CsHeroSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.cs-service": {
      const { __component, ...props } = section;
      return <CsServiceSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.cs-abe": {
      const { __component, ...props } = section;
      return <CsAbeSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.cs-quote": {
      const { __component, ...props } = section;
      return <CsQuoteSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.cs-cta": {
      const { __component, ...props } = section;
      return <CsCtaSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.au-hero": {
      const { __component, ...props } = section;
      return <AuHeroSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.au-mission": {
      const { __component, ...props } = section;
      return <AuMissionSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.au-story": {
      const { __component, ...props } = section;
      return <AuStorySection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.au-meaning": {
      const { __component, ...props } = section;
      return <AuMeaningSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.au-timeline": {
      const { __component, ...props } = section;
      return <AuTimelineSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.au-team": {
      const { __component, ...props } = section;
      return <AuTeamSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.au-cta": {
      const { __component, ...props } = section;
      return <AuCtaSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.ge-hero": {
      const { __component, ...props } = section;
      return <GeHeroSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.ge-stats": {
      const { __component, ...props } = section;
      return <GeStatsSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.ge-service": {
      const { __component, ...props } = section;
      return <GeServiceSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.ge-abe": {
      const { __component, ...props } = section;
      return <GeAbeSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.ge-audience": {
      const { __component, ...props } = section;
      return <GeAudienceSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.ge-quote": {
      const { __component, ...props } = section;
      return <GeQuoteSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.ge-role": {
      const { __component, ...props } = section;
      return <GeRoleSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.ge-faq": {
      const { __component, ...props } = section;
      return <GeFaqSection key={`${__component}-${index}`} {...props} />;
    }
    case "sections.ge-cta": {
      const { __component, ...props } = section;
      return <GeCtaSection key={`${__component}-${index}`} {...props} />;
    }
    default:
      return null;
  }
}

export function DynamicRenderer({ sections }: DynamicRendererProps) {
  if (!sections?.length) return null;

  const content = <>{sections.map(renderSection)}</>;

  if (isCanaryWavesPage(sections)) {
    return <main className="cw-page">{content}</main>;
  }

  if (isVisionAiPage(sections)) {
    return <main className="va-page">{content}</main>;
  }

  if (isInnovationStudioPage(sections)) {
    return <main className="is-page">{content}</main>;
  }

  if (isConsultingServicesPage(sections)) {
    return <main className="cs-page">{content}</main>;
  }

  if (isAboutUsPage(sections)) {
    return <main className="au-page">{content}</main>;
  }

  if (isGeorgiaPage(sections)) {
    return <main className="ge-page">{content}</main>;
  }

  return content;
}
