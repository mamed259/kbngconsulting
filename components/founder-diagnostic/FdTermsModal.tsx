"use client";

import { useEffect, useId, useRef } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function FdTermsModal({ open, onClose }: Props) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fd-terms-overlay" role="presentation" onClick={onClose}>
      <div
        className="fd-terms-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="fd-terms-head">
          <h3 id={titleId}>Terms and Conditions of Engagement</h3>
          <button
            ref={closeRef}
            type="button"
            className="fd-terms-close"
            onClick={onClose}
            aria-label="Close terms"
          >
            ×
          </button>
        </div>
        <iframe
          className="fd-terms-frame"
          title="Terms and Conditions of Engagement"
          src="/legal/terms-and-conditions.html"
        />
        <div className="fd-terms-foot">
          <button type="button" className="btn btn-green" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
