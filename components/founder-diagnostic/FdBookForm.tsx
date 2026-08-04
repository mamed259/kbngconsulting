"use client";

import { useState } from "react";
import { FdTermsModal } from "@/components/founder-diagnostic/FdTermsModal";

const WISE_PAYMENT_URL = "https://wise.com/pay/r/JPw0sCeiNgAZTLU";

const FORM_FIELDS = [
  { label: "Full name", type: "text" },
  { label: "Email", type: "email" },
  { label: "Problem", type: "textarea" },
  { label: "Team size", type: "text" },
  { label: "Can signup", type: "text" },
];

type Props = {
  ctaText: string;
};

export function FdBookForm({ ctaText }: Props) {
  const [open, setOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const problem = String(formData.get("problem") || "").trim();
    const teamSize = String(formData.get("team_size") || "").trim();
    const canSignup = String(formData.get("can_signup") || "").trim();
    const terms = formData.get("terms") === "on";

    if (!terms) {
      setError("Please accept the Terms and Conditions.");
      setLoading(false);
      return;
    }

    const message = [
      `Problem / for whom / country:\n${problem}`,
      `Team size: ${teamSize}`,
      `Can someone sign up and use the product today?: ${canSignup}`,
    ].join("\n\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-form-source": "founder-diagnostic",
        },
        body: JSON.stringify({
          source: "founder-diagnostic",
          fields: FORM_FIELDS,
          values: {
            name,
            email,
            problem,
            team_size: teamSize,
            can_signup: canSignup,
            message,
          },
        }),
      });

      const payload = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(payload.message || "Failed to submit form");
      }

      window.location.assign(WISE_PAYMENT_URL);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed");
      setLoading(false);
    }
  }

  if (!open) {
    return (
      <button type="button" className="btn btn-green" onClick={() => setOpen(true)}>
        {ctaText}
        <svg className="arrow" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
    );
  }

  return (
    <>
      <form className="fd-book-form" onSubmit={handleSubmit}>
        <label className="fd-field">
          <span>Full name</span>
          <input name="name" type="text" required autoComplete="name" placeholder="Your name" />
        </label>

        <label className="fd-field">
          <span>Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
          />
        </label>

        <label className="fd-field">
          <span>In a few words, what problem do you solve, for whom, and in which country?</span>
          <textarea
            name="problem"
            required
            rows={3}
            placeholder="What you build, who it's for, and where"
          />
        </label>

        <label className="fd-field">
          <span>How many people are in the team?</span>
          <input name="team_size" type="text" required placeholder="e.g. 4" />
        </label>

        <fieldset className="fd-field fd-radio-field">
          <legend>Can someone sign up and use your product today?</legend>
          <label className="fd-radio">
            <input type="radio" name="can_signup" value="Yes" required />
            <span>Yes</span>
          </label>
          <label className="fd-radio">
            <input type="radio" name="can_signup" value="No" required />
            <span>No</span>
          </label>
        </fieldset>

        <label className="fd-terms-check">
          <input type="checkbox" name="terms" required />
          <span>
            I agree to the{" "}
            <button type="button" className="fd-terms-link" onClick={() => setTermsOpen(true)}>
              Terms and Conditions
            </button>
          </span>
        </label>

        {error ? <p className="fd-form-error">{error}</p> : null}

        <button type="submit" className="btn btn-green" disabled={loading}>
          {loading ? "Sending..." : "Send & pay"}
          {!loading ? (
            <svg className="arrow" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          ) : null}
        </button>
      </form>

      <FdTermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
    </>
  );
}
