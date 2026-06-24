"use client";

import { useState } from "react";
import { navLinks } from "@/components/layout/nav-links";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`menu-btn ${isOpen ? "open" : ""}`}
        id="menuBtn"
        aria-label="Open menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`menu ${isOpen ? "open" : ""}`} id="menu">
        <div className="menu-inner">
          <ul>
            {navLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
