import type { AuMissionSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<AuMissionSectionData, "__component">;

export function AuMissionSection({ heading, body }: Props) {
  return (
    <section className="mission">
      <Container>
        <div className="mission-flag reveal" aria-hidden="true" />
        {heading ? <span className="kicker reveal">{heading}</span> : null}
        <p className="mission-statement reveal">{body}</p>
      </Container>
    </section>
  );
}
