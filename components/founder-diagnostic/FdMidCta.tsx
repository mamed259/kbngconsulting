import type { FdMidCtaSectionData } from "@/types/strapi";

type Props = Omit<FdMidCtaSectionData, "__component">;

export function FdMidCta({
  sectionConfig,
  heading,
  body,
  ctaText,
  ctaHref,
  note,
}: Props) {
  return (
    <section id={sectionConfig?.sectionId || undefined} style={{ paddingTop: "0" }}>
      <div className="wrap cta-band reveal">
        <h3>{heading}</h3>
        {body ? <p>{body}</p> : null}
        {note ? (
          <p className="spots">
            {/Two spots left this month/i.test(note) ? (
              <>
                <b>Two spots left this month.</b> {note.replace(/^Two spots left this month\.?\s*/i, "")}
              </>
            ) : (
              note
            )}
          </p>
        ) : null}
        {ctaText && ctaHref ? (
          <a className="btn btn-primary" href={ctaHref}>
            {ctaText}
            <svg className="arrow" viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        ) : null}
      </div>
    </section>
  );
}
