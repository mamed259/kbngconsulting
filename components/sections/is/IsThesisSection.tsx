import type { IsThesisSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<IsThesisSectionData, "__component">;

export function IsThesisSection({ heading, lead, body, pillars }: Props) {
  return (
    <section className="thesis">
      <Container className="thesis-grid">
        <div>
          <h2 style={{ margin: "1rem 0 1.2rem" }}>{heading}</h2>
          {lead ? <p className="lead">{lead}</p> : null}
          {body ? <p style={{ marginTop: "1.2rem" }}>{body}</p> : null}
        </div>
        {pillars?.length ? (
          <div className="pillars">
            {pillars.map((pillar) => (
              <div key={pillar.id} className="pillar">
                <h4>{pillar.title}</h4>
                {pillar.body ? <p>{pillar.body}</p> : null}
              </div>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
