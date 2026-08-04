"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const FIELDS = [
  { label: "Full name", type: "text", required: true },
  { label: "Business email", type: "email", required: true },
  { label: "Company", type: "text", required: false },
  { label: "Message", type: "textarea", required: false },
];

type FormValues = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const EMPTY: FormValues = { name: "", email: "", company: "", message: "" };

function isHomePath(pathname: string | null) {
  return pathname === "/";
}

function isFounderPath(pathname: string | null) {
  return Boolean(pathname?.startsWith("/founder-diagnostic"));
}

function shouldOpenContactModal(anchor: HTMLAnchorElement, pathname: string | null) {
  if (anchor.hasAttribute("data-contact-trigger")) return true;
  if (anchor.classList.contains("lets-talk")) return true;

  const href = (anchor.getAttribute("href") || "").trim();
  if (!href) return false;

  if (/kbngconsulting\.com\/contacts/i.test(href) || href === "/contacts" || href.endsWith("/contacts")) {
    return true;
  }

  // #book is the homepage / founder form — keep native scroll there
  if (href === "#book" || href.endsWith("/#book")) {
    if (isHomePath(pathname) || isFounderPath(pathname)) return false;
    return true;
  }

  return false;
}

export function ContactModal() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const firstInputRef = useRef<HTMLInputElement>(null);
  const closeTimer = useRef<number | null>(null);

  function openModal() {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setSubmitted(false);
    setError("");
    setMounted(true);
    window.requestAnimationFrame(() => setVisible(true));
  }

  function closeModal() {
    setVisible(false);
    closeTimer.current = window.setTimeout(() => {
      setMounted(false);
      closeTimer.current = null;
    }, 220);
  }

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (!shouldOpenContactModal(anchor, pathname)) return;
      event.preventDefault();
      openModal();
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  useEffect(() => {
    if (mounted) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, [mounted]);

  useEffect(() => {
    if (!visible) return;
    firstInputRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [visible]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
      document.body.classList.remove("no-scroll");
    };
  }, []);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError("");

    if (!values.name.trim() || !values.email.trim()) {
      setError("Name and email are required.");
      return;
    }
    if (!agreed) {
      setError("Please agree to be contacted.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-form-source": "contact-modal",
        },
        body: JSON.stringify({
          source: "contact-modal",
          fields: FIELDS,
          values: {
            name: values.name.trim(),
            email: values.email.trim(),
            company: values.company.trim(),
            message: values.message.trim(),
            full_name: values.name.trim(),
            business_email: values.email.trim(),
          },
        }),
      });
      const payload = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(payload.message || "Failed to submit form");

      setSubmitted(true);
      setValues(EMPTY);
      setAgreed(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setLoading(false);
    }
  }

  if (!mounted) return null;

  return (
    <div
      className={`contact-modal${visible ? " is-visible" : ""}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeModal();
      }}
    >
      <div
        className={`contact-modal-panel${visible ? " is-visible" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button type="button" className="contact-modal-close" onClick={closeModal} aria-label="Close dialog">
          ×
        </button>

        {submitted ? (
          <div className="contact-modal-success" role="status" aria-live="polite">
            <h3 id="contact-modal-title">Thanks — we&apos;ll be in touch.</h3>
            <p>Our team will contact you within one business day.</p>
            <button type="button" className="btn btn-solid" onClick={closeModal}>
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="contact-modal-eyebrow">Let&apos;s talk</p>
            <h2 id="contact-modal-title" className="contact-modal-title">
              Tell us what you&apos;re working on.
            </h2>
            <p className="contact-modal-copy">
              Share a few details and we&apos;ll follow up with next steps for consulting or the Innovation
              Studio.
            </p>

            <form className="contact-modal-form" onSubmit={onSubmit} noValidate>
              <label>
                Full name
                <input
                  ref={firstInputRef}
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  placeholder="Your name"
                  onChange={(event) => setValues((v) => ({ ...v, name: event.target.value }))}
                  required
                />
              </label>
              <label>
                Business email
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  placeholder="you@company.com"
                  onChange={(event) => setValues((v) => ({ ...v, email: event.target.value }))}
                  required
                />
              </label>
              <label>
                Company
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                  value={values.company}
                  placeholder="Company name"
                  onChange={(event) => setValues((v) => ({ ...v, company: event.target.value }))}
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows={3}
                  value={values.message}
                  placeholder="What should we discuss?"
                  onChange={(event) => setValues((v) => ({ ...v, message: event.target.value }))}
                />
              </label>

              <label className="contact-modal-check">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(event) => setAgreed(event.target.checked)}
                />
                <span>I agree to be contacted by KB&amp;G about this request.</span>
              </label>

              {error ? (
                <p className="contact-modal-error" role="alert">
                  {error}
                </p>
              ) : null}

              <button type="submit" className="btn btn-solid" disabled={loading}>
                {loading ? "Sending..." : "Send message"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
