"use client";

import { useState } from "react";
import type { FormFieldData } from "@/types/strapi";
import { FormField } from "@/components/ui/FormField";

interface ContactFormProps {
  fields: FormFieldData[];
  source?: string;
}

function fieldName(label: string) {
  return label.toLowerCase().replace(/\s+/g, "_");
}

export function ContactForm({ fields, source = "website-contact" }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const formData = new FormData(event.currentTarget);
      const values = Object.fromEntries(formData.entries()) as Record<string, string>;
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-form-source": source,
        },
        body: JSON.stringify({ values, fields, source }),
      });

      const payload = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(payload.message || "Failed to submit form");
      }

      setMessage("Thanks. We will contact you soon.");
      event.currentTarget.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <FormField
          key={field.id ?? field.label}
          label={field.label}
          name={fieldName(field.label)}
          type={field.type}
          placeholder={field.placeholder}
          required={field.required}
        />
      ))}
      <button type="submit" className="btn btn-solid" disabled={loading}>
        {loading ? "Submitting..." : "Send"}
      </button>
      {message ? <p className="contact-form-msg">{message}</p> : null}
      {error ? (
        <p className="contact-form-msg" style={{ color: "var(--coral)" }} role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
