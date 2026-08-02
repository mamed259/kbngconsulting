"use client";

import { useState } from "react";
import type { FdFaqSectionData } from "@/types/strapi";

type Props = Omit<FdFaqSectionData, "__component">;

export function FdFaq({ sectionConfig, heading, items = [] }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id={sectionConfig?.sectionId || "faq"}>
      <div className="wrap">
        <div className="head reveal">
          <h2>{heading}</h2>
        </div>
        <div className="obj-list">
          {items.map((item, i) => {
            const isOpen = open === i;
            const panelId = `fd-faq-panel-${i}`;
            return (
              <div key={item.id ?? item.question} className={`obj${isOpen ? " is-open" : ""}`}>
                <button
                  type="button"
                  className="obj-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {item.question}
                  <span className="plus" aria-hidden="true">
                    +
                  </span>
                </button>
                <div id={panelId} className="obj-panel" role="region" aria-hidden={!isOpen}>
                  <div className="obj-panel-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
