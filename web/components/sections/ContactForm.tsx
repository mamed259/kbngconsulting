"use client";

import { useState } from "react";
import type { FormFieldData } from "@/types/strapi";
import { FormField } from "@/components/ui/FormField";

interface ContactFormProps {
  fields: FormFieldData[];
}

export function ContactForm({ fields }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData(event.currentTarget);
      const values = Object.fromEntries(formData.entries()) as Record<string, string>;
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ values, fields }),
      });

      const payload = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(payload.message || "Failed to submit form");
      }

      setMessage("Thanks. We will contact you soon.");
      event.currentTarget.reset();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Submission failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "640px", margin: "0 auto", display: "grid", gap: "14px" }}
    >
      {fields.map((field) => (
        <FormField
          key={field.id}
          label={field.label}
          name={field.label.toLowerCase().replace(/\s+/g, "_")}
          type={field.type}
          placeholder={field.placeholder}
          required={field.required}
        />
      ))}
      <button type="submit" className="btn btn-solid" disabled={loading}>
        {loading ? "Submitting..." : "Send"}
      </button>
      {message ? <p style={{ margin: 0, color: "var(--muted)" }}>{message}</p> : null}
    </form>
  );
}
