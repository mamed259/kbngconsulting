"use client";

import { useState } from "react";

interface AccordionItem {
  id: string | number;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [activeId, setActiveId] = useState<string | number | null>(null);

  return (
    <div>
      {items.map((item) => {
        const isOpen = activeId === item.id;
        return (
          <div key={item.id} className="scard acc-slate" style={{ marginBottom: "12px" }}>
            <button
              type="button"
              onClick={() => setActiveId(isOpen ? null : item.id)}
              style={{ width: "100%", textAlign: "left", background: "transparent", border: "0", color: "inherit" }}
            >
              <h3 style={{ maxWidth: "100%" }}>{item.title}</h3>
            </button>
            {isOpen ? <p style={{ marginTop: "12px", maxWidth: "100%" }}>{item.content}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
