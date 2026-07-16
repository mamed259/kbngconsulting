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

interface DynamicRendererProps {
  sections: StrapiSection[];
}

export function isCanaryWavesPage(sections: StrapiSection[]): boolean {
  return sections.some((section) => section.__component.startsWith("sections.cw-"));
}

export function isVisionAiPage(sections: StrapiSection[]): boolean {
  return sections.some((section) => section.__component.startsWith("sections.va-"));
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

  return content;
}
