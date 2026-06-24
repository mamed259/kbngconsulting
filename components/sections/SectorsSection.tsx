import type { SectorsSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type SectorsSectionProps = Omit<SectorsSectionData, "__component">;

export function SectorsSection({ heading, items }: SectorsSectionProps) {
  return (
    <section id="sectors">
      <Container>
        <div className="sectors-head reveal">
          <h2>{heading}</h2>
          <p>Built for operators in high-stakes, asset-heavy industries.</p>
        </div>
        <div className="sgrid">
          {items.map((item) => (
            <div key={item.id} className="sector reveal">
              <div className="sec-cap">
                <h3>{item.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
