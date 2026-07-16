import type { ReactNode } from "react";
import type { AuStorySectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<AuStorySectionData, "__component">;

const HIGHLIGHT_PHRASES = ["strategic consulting", "product co-creation"];

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderWithHighlights(text: string): ReactNode {
  const pattern = new RegExp(`(${HIGHLIGHT_PHRASES.map(escapeRegExp).join("|")})`, "g");
  const parts = text.split(pattern);

  return parts.map((part, index) =>
    HIGHLIGHT_PHRASES.includes(part) ? <strong key={index}>{part}</strong> : part,
  );
}

export function AuStorySection({ heading, body }: Props) {
  return (
    <section className="story">
      <Container>
        <h2 className="reveal">{heading}</h2>
        <p className="story-body reveal">{renderWithHighlights(body)}</p>
      </Container>
    </section>
  );
}
