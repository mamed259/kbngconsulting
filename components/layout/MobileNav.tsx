"use client";

import Link from "next/link";
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
                <Link href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
