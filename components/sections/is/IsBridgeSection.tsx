import Link from "next/link";
import type { IsBridgeSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<IsBridgeSectionData, "__component">;

export function IsBridgeSection({
  sectionConfig,
  heading,
  lead,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  pillars,
}: Props) {
  return (
    <section className="bridge" id={sectionConfig?.sectionId || "sectors"}>
      <Container className="bridge-grid">
        <div>
          <h2 style={{ margin: "1rem 0 1.1rem" }}>{heading}</h2>
          {lead ? <p className="lead">{lead}</p> : null}
          {(primaryCtaText || secondaryCtaText) && (
            <div className="hero-actions">
              {primaryCtaText && primaryCtaHref ? (
                <Link className="btn btn-mint" href={primaryCtaHref}>
                  {primaryCtaText}
                </Link>
              ) : null}
              {secondaryCtaText && secondaryCtaHref ? (
                <Link className="btn btn-ghost" href={secondaryCtaHref}>
                  {secondaryCtaText}
                </Link>
              ) : null}
            </div>
          )}
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
