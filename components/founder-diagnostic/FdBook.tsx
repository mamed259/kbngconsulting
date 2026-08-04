import type { FdBookSectionData } from "@/types/strapi";
import { FdBookForm } from "@/components/founder-diagnostic/FdBookForm";

type Props = Omit<FdBookSectionData, "__component">;

export function FdBook({
  sectionConfig,
  heading,
  metaLine,
  guarantee,
  ctaText,
}: Props) {
  return (
    <section className="offer" id={sectionConfig?.sectionId || "book"}>
      <div className="wrap">
        <div className="offer-card reveal">
          <h2>{heading}</h2>
          <div className="offer-meta">
            {metaLine ? <p className="terms">{metaLine}</p> : null}
            {guarantee ? <p className="guar">{guarantee}</p> : null}
          </div>
          {ctaText ? <FdBookForm ctaText={ctaText} /> : null}
        </div>
      </div>
    </section>
  );
}
