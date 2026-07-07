import type { StrapiSection } from "@/types/strapi";
import { HeroSection } from "@/components/sections/HeroSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { ConsultingSection } from "@/components/sections/ConsultingSection";
import { SectorsSection } from "@/components/sections/SectorsSection";
import { BookSection } from "@/components/sections/BookSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";

interface DynamicRendererProps {
  sections: StrapiSection[];
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
    default:
      return null;
  }
}

export function DynamicRenderer({ sections }: DynamicRendererProps) {
  if (!sections?.length) return null;
  return <>{sections.map(renderSection)}</>;
}
