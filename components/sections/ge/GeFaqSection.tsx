"use client";

import type { GeFaqSectionData } from "@/types/strapi";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

type Props = Omit<GeFaqSectionData, "__component">;

export function GeFaqSection({ sectionConfig, heading, items }: Props) {
  return (
    <FaqAccordion
      heading={heading}
      items={items}
      sectionId={sectionConfig?.sectionId}
      headingAccessory={
        <div className="flag-row">
          <span className="flag mint" />
          <span className="flag yellow" />
          <span className="flag coral" />
        </div>
      }
    />
  );
}
