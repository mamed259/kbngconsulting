import type { ReactNode } from "react";
import type { AuStorySectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<AuStorySectionData, "__component">;

const HIGHLIGHT_PHRASES = ["strategic consulting", "product co-creation", "KB&G Innovation Studio"];

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderWithHighlights(text: string): ReactNode {
  const pattern = new RegExp(`(${HIGHLIGHT_PHRASES.map(escapeRegExp).join("|")})`, "gi");
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const matched = HIGHLIGHT_PHRASES.some((phrase) => phrase.toLowerCase() === part.toLowerCase());
    return matched ? <strong key={index}>{part}</strong> : part;
  });
}

export function AuStorySection({ heading, body }: Props) {
  return (
    <section className="au-story">
      <Container>
        <div className="au-story-grid">
          <div className="au-story-copy">
            <div className="kicker reveal" style={{ ["--t" as string]: "var(--yellow)" }}>
              <span className="flag yellow" aria-hidden="true" />
              Our story
            </div>
            <h2 className="reveal">{heading}</h2>
          </div>
          <p className="au-story-body reveal">{renderWithHighlights(body)}</p>
        </div>
      </Container>
    </section>
  );
}
