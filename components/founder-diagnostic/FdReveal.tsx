"use client";

import { useEffect } from "react";

/** Scroll-reveal matching the original founder-diagnostic IntersectionObserver. */
export function FdReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".fd-page .reveal").forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${Math.min(i % 5, 4) * 55}ms`;
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return null;
}
