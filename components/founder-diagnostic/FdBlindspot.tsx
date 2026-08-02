import Image from "next/image";
import type { FdBlindspotSectionData } from "@/types/strapi";
import { extractStrapiImageUrl } from "@/lib/utils";

type Props = Omit<FdBlindspotSectionData, "__component">;

const CHIP_ICONS = [
  <svg key="map" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" strokeLinejoin="round" />
    <path d="M9 4v14M15 6v14" />
  </svg>,
  <svg key="trash" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" strokeLinejoin="round" />
    <path d="M10 11v6M14 11v6" />
  </svg>,
  <svg key="sad" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M8 16c1.2-1.6 6.8-1.6 8 0" strokeLinecap="round" />
    <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
    <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
  </svg>,
];

function formatHeading(heading: string) {
  const match = heading.match(/^(.*)(\bhide\b)(.*)$/i);
  if (!match) return heading;
  return (
    <>
      {match[1]}
      <span className="mark c">{match[2]}</span>
      {match[3]}
    </>
  );
}

function formatCardTitle(title?: string) {
  if (!title) return null;
  const match = title.match(/^(.*?)(\bthis year\.?)$/i);
  if (!match) return title;
  return (
    <>
      {match[1].trim()} <span className="mark y">{match[2]}</span>
    </>
  );
}

export function FdBlindspot({
  sectionConfig,
  heading,
  lede,
  cardTitle,
  cardBody,
  chips = [],
  image,
  imageUrl,
  imageAlt,
}: Props) {
  const src = extractStrapiImageUrl(image || imageUrl) || "/images/founder-diagnostic/funnel.jpg";

  return (
    <section id={sectionConfig?.sectionId || "blindspot"} style={{ background: "var(--paper-2)" }}>
      <div className="wrap blind-grid">
        <div className="reveal">
          <h2>{formatHeading(heading)}</h2>
          {lede ? <p className="lede">{lede}</p> : null}
        </div>

        <div className="burden-card reveal">
          <Image
            className="funnel-art"
            src={src}
            alt={imageAlt || "Founder blind spot illustration"}
            width={800}
            height={1000}
          />
          <div className="bc-inner">
            <div>
              {cardTitle ? <div className="bc-n">{formatCardTitle(cardTitle)}</div> : null}
              {cardBody ? <p className="bc-copy">{cardBody}</p> : null}
            </div>
            {chips.length ? (
              <div className="bc-chips">
                {chips.map((chip, index) => (
                  <div className="chip2" key={chip.id ?? chip.label}>
                    <span className="ci">{CHIP_ICONS[index % CHIP_ICONS.length]}</span>
                    <span className="cl">{chip.label}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
