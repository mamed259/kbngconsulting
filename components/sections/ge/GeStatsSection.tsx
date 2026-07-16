import type { GeStatsSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<GeStatsSectionData, "__component">;

export function GeStatsSection({ sectionConfig, items }: Props) {
  if (!items?.length) return null;

  return (
    <section id={sectionConfig?.sectionId || undefined} className="clients">
      <Container className="reveal">
        <div className="stats">
          {items.map((item) => (
            <div className="stat" key={item.id}>
              <div className="snum">{item.number}</div>
              <p className="slbl">{item.label}</p>
              {item.source ? <p className="ssrc">{item.source}</p> : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
