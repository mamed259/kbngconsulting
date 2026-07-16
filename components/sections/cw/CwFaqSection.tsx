"use client";

import { useState } from "react";
import type { CwFaqSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<CwFaqSectionData, "__component">;

export function CwFaqSection({ heading, items }: Props) {
  const [openId, setOpenId] = useState<number | null>(null);

  if (!items?.length) return null;

  return (
    <section className="faq">
      <Container>
        <h2 className="reveal">{heading}</h2>
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
