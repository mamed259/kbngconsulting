import type { AuMissionSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<AuMissionSectionData, "__component">;

export function AuMissionSection({ heading, body }: Props) {
  return (
    <section className="au-mission">
      <Container>
        <div className="au-mission-inner">
          {heading ? (
            <div className="kicker reveal" style={{ ["--t" as string]: "var(--mint)" }}>
              <span className="flag mint" aria-hidden="true" />
              {heading}
            </div>
          ) : null}
          <p className="au-mission-statement reveal">{body}</p>
        </div>
      </Container>
    </section>
  );
}
