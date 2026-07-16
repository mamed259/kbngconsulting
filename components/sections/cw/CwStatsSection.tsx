import type { CwStatsSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<CwStatsSectionData, "__component">;

export function CwStatsSection({ label, items }: Props) {
  if (!items?.length) return null;

  return (
    <section className="clients" style={{ padding: "46px 0" }}>
      <Container>
        <div className="reveal">
          {label ? <p className="label">{label}</p> : null}
          <div className="stats">
            {items.map((stat) => (
              <div key={stat.id} className="stat">
                <div className="snum">{stat.value}</div>
                <p className="slbl">{stat.label}</p>
                {stat.source ? <p className="ssrc">{stat.source}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
