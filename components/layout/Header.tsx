"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/components/layout/nav-links";

const SCROLL_THRESHOLD = 72;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const updateHeader = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (currentY <= SCROLL_THRESHOLD) {
        setIsVisible(true);
      } else if (delta > 6) {
        setIsVisible(true);
      } else if (delta < -6) {
        setIsVisible(false);
      }

      lastScrollY.current = currentY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(updateHeader);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showHeader = isOpen || isVisible;

  return (
    <header id="top" className={showHeader ? "is-visible" : "is-hidden"}>
      <div className="header-shell">
        <div className="wrap nav">
          <Link className="brand" href="/" aria-label="KB and G home">
            <svg
              className="brand-logo-svg"
              viewBox="0 0 482 34"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden
            >
              <use href="#svg347873607_7690" />
            </svg>
          </Link>

          <div className="nav-actions">
            <a className="btn btn-solid nav-cta" href="#book">
              Let&apos;s talk
            </a>
            <button
              type="button"
              className={`menu-btn ${isOpen ? "open" : ""}`}
              id="menuBtn"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <nav className={`menu ${isOpen ? "open" : ""}`} id="menu">
          <div className="menu-inner">
            <ul>
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
