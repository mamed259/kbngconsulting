import type { GeRoleSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<GeRoleSectionData, "__component">;

export function GeRoleSection({ sectionConfig, heading, body }: Props) {
  return (
    <section id={sectionConfig?.sectionId || undefined} className="role-band">
      <Container>
        <div
          className="head reveal"
          style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap", margin: "0 0 4px" }}
        >
          <h2>{heading}</h2>
          <div className="flag-row">
            <span className="flag mint" />
            <span className="flag yellow" />
            <span className="flag coral" />
          </div>
        </div>
        <p className="reveal">{body}</p>
      </Container>
    </section>
  );
}
