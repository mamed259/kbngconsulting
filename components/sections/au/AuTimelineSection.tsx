import type { AuTimelineSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<AuTimelineSectionData, "__component">;

export function AuTimelineSection({ heading, items }: Props) {
  if (!items?.length) return null;

  return (
    <section className="timeline">
      <Container>
        <h2 className="reveal">{heading}</h2>
        <div className="tl-spine">
          {items.map((item) => (
            <div className="tl-item reveal" key={item.id}>
              <span className="tl-dot" aria-hidden="true" />
              <span className="tl-year">{item.year}</span>
              <span className="tl-label">{item.label}</span>
              {item.description ? <p className="tl-desc">{item.description}</p> : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
