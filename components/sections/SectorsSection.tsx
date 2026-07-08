import type { SectorsSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { extractStrapiImageUrl } from "@/lib/utils";

type SectorsSectionProps = Omit<SectorsSectionData, "__component">;

export function SectorsSection({ heading, items }: SectorsSectionProps) {
  return (
    <section id="sectors">
      <Container>
        <div className="sectors-head reveal">
          <div>
            <h2>
              <span style={{ color: "var(--white)" }}>Sectors</span>{" "}
              <span style={{ color: "var(--yellow)" }}>we serve</span>
            </h2>
            <p>Built for operators in high-stakes, asset-heavy industries</p>
          </div>
          <div className="flag-row">
            <span className="flag yellow" />
            <span className="flag coral" />
            <span className="flag mint" />
          </div>
        </div>
        <div className="sgrid">
          {items.map((item) => {
            const imageUrl = extractStrapiImageUrl(item.image || item.imageUrl);
            return (
              <div
                key={item.id}
                className="sector reveal"
                style={
                  imageUrl
                    ? {
                        backgroundImage: `url("${imageUrl}")`,
                      }
                    : undefined
                }
              >
                <div className="sec-cap">
                  <h3>{item.label}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
      <div className="divider reveal" aria-hidden>
        <span className="flag yellow" />
        <span className="flag coral" />
        <span className="flag mint" />
      </div>
    </section>
  );
}
