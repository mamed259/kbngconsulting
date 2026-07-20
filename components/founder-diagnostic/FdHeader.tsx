"use client";

import { useEffect, useState } from "react";

const NAV = [
  { href: "#blindspot", label: "The Blind Spot" },
  { href: "#method", label: "How I Work" },
  { href: "#case", label: "Case Study" },
  { href: "#examiner", label: "About" },
  { href: "#proof", label: "Results" },
  { href: "#faq", label: "FAQ" },
] as const;

function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 29 26" aria-hidden="true">
      <path d="M4 7 L25 2 L25 17 L14.5 12.5 L4 22 Z" fill="#68FFCF" />
    </svg>
  );
}

export function FdHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="fd-header">
      <div className="wrap nav">
        <a className="brand" href="#top" onClick={close}>
          <BrandMark />
          STARTUP&nbsp;WITCH <span className="by">by KB&amp;G</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-primary nav-cta" href="#book" onClick={close}>
          <span className="lbl-long">Book Your Diagnostic</span>
          <span className="lbl-short">Book</span>
        </a>

        <button
          type="button"
          className={`fd-burger${open ? " is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="fd-mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="fd-mobile-nav"
        className={`fd-mobile-nav${open ? " is-open" : ""}`}
        hidden={!open}
      >
        <nav className="fd-mobile-links" aria-label="Mobile">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
          <a className="btn btn-primary" href="#book" onClick={close}>
            Book Your Diagnostic
          </a>
        </nav>
      </div>
    </header>
  );
}
