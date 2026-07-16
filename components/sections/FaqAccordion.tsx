"use client";

import { useState, type ReactNode } from "react";
import type { FaqItemData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

interface FaqAccordionProps {
  heading: string;
  items: FaqItemData[];
  sectionId?: string;
  headingAccessory?: ReactNode;
}

export function FaqAccordion({
  heading,
  items,
  sectionId,
  headingAccessory,
}: FaqAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  if (!items?.length) return null;

  return (
    <section id={sectionId || undefined} className="faq">
      <Container>
        <div className="faq-head reveal">
          <h2>{heading}</h2>
          {headingAccessory}
        </div>
        <div className="faq-list">
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className={`qa${isOpen ? " is-open" : ""}`}>
                <button
                  type="button"
                  className="qa-trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <h3>{item.question}</h3>
                  <span className="qa-icon" aria-hidden="true" />
                </button>
                <div className="qa-panel" hidden={!isOpen}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
