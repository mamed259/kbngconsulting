"use client";

import type { CwFaqSectionData } from "@/types/strapi";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

type Props = Omit<CwFaqSectionData, "__component">;

export function CwFaqSection({ heading, items }: Props) {
  return <FaqAccordion heading={heading} items={items} />;
}
