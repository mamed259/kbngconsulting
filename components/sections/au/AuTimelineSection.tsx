import type { AuTimelineSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<AuTimelineSectionData, "__component">;

export function AuTimelineSection({ heading, items }: Props) {
  if (!items?.length) return null;

  // CMS stores newest-first; show oldest → newest left-to-right
  const ordered = [...items].reverse();

  return (
    <section className="au-timeline">
      <Container>
        <div className="kicker reveal" style={{ ["--t" as string]: "var(--mint)" }}>
          <span className="flag mint" aria-hidden="true" />
          History
        </div>
        <h2 className="reveal">{heading}</h2>
        <div className="au-tl-track reveal">
          {ordered.map((item, index) => (
            <article className="au-tl-card" key={item.id}>
              <span className="au-tl-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="au-tl-year">{item.year}</span>
              <span className="au-tl-label">{item.label}</span>
              {item.description ? <p className="au-tl-desc">{item.description}</p> : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
