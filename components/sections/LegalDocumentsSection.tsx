"use client";

import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";

type LegalDocumentsSectionProps = {
  privacyPolicy?: unknown;
  termsOfUse?: unknown;
};

function richTextToPlainText(value: unknown): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (Array.isArray(value)) {
    return value
      .map((item) => richTextToPlainText(item))
      .filter(Boolean)
      .join("\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
  }
  if (typeof value === "object") {
    const row = value as Record<string, unknown>;
    const text = typeof row.text === "string" ? row.text : "";
    const children = richTextToPlainText(row.children);
    const content = richTextToPlainText(row.content);
    return [text, children, content].filter(Boolean).join("\n").trim();
  }
  return "";
}

export function LegalDocumentsSection({
  privacyPolicy,
  termsOfUse,
}: LegalDocumentsSectionProps) {
  const pathname = usePathname();
  const isTerms = pathname === "/terms-of-use";
  const pageTitle = isTerms ? "Terms of Use" : "Privacy Policy";
  const content = richTextToPlainText(isTerms ? termsOfUse : privacyPolicy);

  return (
    <section style={{ padding: "140px 0 96px" }}>
      <Container>
        <h1 style={{ margin: 0, fontSize: "clamp(2.6rem, 5vw, 3.75rem)" }}>
          {pageTitle}
        </h1>
        <div
          style={{
            marginTop: "22px",
            color: "var(--muted)",
            lineHeight: 1.75,
            fontSize: "1.12rem",
            whiteSpace: "pre-wrap",
          }}
        >
          {content}
        </div>
      </Container>
    </section>
  );
}
