"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { IsBrandbarSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<IsBrandbarSectionData, "__component">;

export function IsBrandbarSection({ label, chips }: Props) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!chips?.length) return;

    const chipNodes = new Map<string, HTMLAnchorElement>();
    navRef.current?.querySelectorAll<HTMLAnchorElement>(".bb-chip[data-target]").forEach((chip) => {
      const target = chip.dataset.target;
      if (target) chipNodes.set(target, chip);
    });

    if (!chipNodes.size) return;

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          chipNodes.forEach((chip) => chip.classList.remove("active"));
          const active = chipNodes.get(entry.target.id);
          if (active) active.classList.add("active");
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    chipNodes.forEach((_, id) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });

    return () => spy.disconnect();
  }, [chips]);

  if (!chips?.length) return null;

  const left = chips.slice(0, Math.min(2, chips.length));
  const right = chips.slice(2);

  return (
    <nav className="brandbar" aria-label={label || "Our products"} ref={navRef}>
      <Container className="brandbar-inner">
        {label ? <span className="bb-label">{label}</span> : null}
        <div className="bb-group">
          {left.map((chip) => (
            <Link
              key={chip.id}
              className="bb-chip"
              href={chip.href || `#${chip.targetId || ""}`}
              data-target={chip.targetId || undefined}
            >
              {chip.label}
            </Link>
          ))}
        </div>
        {right.length ? (
          <>
            <span className="bb-div" />
            <div className="bb-group">
              {right.map((chip) => (
                <Link
                  key={chip.id}
                  className="bb-chip"
                  href={chip.href || `#${chip.targetId || ""}`}
                  data-target={chip.targetId || undefined}
                >
                  {chip.label}
                </Link>
              ))}
            </div>
          </>
        ) : null}
      </Container>
    </nav>
  );
}
