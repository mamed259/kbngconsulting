import type { FdBookSectionData } from "@/types/strapi";

type Props = Omit<FdBookSectionData, "__component">;

export function FdBook({
  sectionConfig,
  heading,
  metaLine,
  guarantee,
  ctaText,
  ctaHref,
}: Props) {
  return (
    <section className="offer" id={sectionConfig?.sectionId || "book"}>
      <div className="wrap">
        <div className="offer-card reveal">
          <h2>{heading}</h2>
          <div className="offer-bottom">
            <div>
              {metaLine ? <p className="terms">{metaLine}</p> : null}
              {guarantee ? <p className="guar">{guarantee}</p> : null}
            </div>
            {ctaText && ctaHref ? (
              <a className="btn btn-green" href={ctaHref}>
                {ctaText}
                <svg className="arrow" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
