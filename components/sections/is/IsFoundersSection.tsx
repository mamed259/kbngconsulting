import Link from "next/link";
import type { IsFoundersSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { parseStringList } from "@/components/sections/cw/shared";

type Props = Omit<IsFoundersSectionData, "__component">;

export function IsFoundersSection({
  heading,
  body,
  roles,
  primaryCtaText,
  primaryCtaHref,
  cardEyebrow,
  cardTitle,
  cardBody,
  cardCtaText,
  cardCtaHref,
}: Props) {
  const roleList = parseStringList(roles);

  return (
    <section>
      <Container>
        <div className="founders">
          <div className="founders-inner">
            <div>
              <h2 style={{ margin: "1rem 0 0.8rem" }}>{heading}</h2>
              {body ? <p>{body}</p> : null}
              {roleList.length ? (
                <div className="roles">
                  {roleList.map((role) => (
                    <span key={role}>{role}</span>
                  ))}
                </div>
              ) : null}
              {primaryCtaText && primaryCtaHref ? (
                <Link className="btn btn-primary" href={primaryCtaHref}>
                  {primaryCtaText}
                </Link>
              ) : null}
            </div>
            {(cardTitle || cardBody) && (
              <div className="founders-card">
                {cardEyebrow ? <span className="pd">{cardEyebrow}</span> : null}
                {cardTitle ? <h4>{cardTitle}</h4> : null}
                {cardBody ? <p>{cardBody}</p> : null}
                {cardCtaText && cardCtaHref ? (
                  <Link
                    className="btn btn-ghost btn-sm"
                    style={{ width: "100%", justifyContent: "center" }}
                    href={cardCtaHref}
                  >
                    {cardCtaText}
                  </Link>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
