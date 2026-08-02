import type { FdNormalSectionData } from "@/types/strapi";

type Props = Omit<FdNormalSectionData, "__component">;

function splitParagraphs(text?: string) {
  return (text || "")
    .split(/\n\n+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function formatHeading(heading: string) {
  const match = heading.match(/^(.*)(\bwrong company\.?)$/i);
  if (!match) return heading;
  return (
    <>
      {match[1]}
      <span className="mark c">{match[2]}</span>
    </>
  );
}

export function FdNormal({
  sectionConfig,
  heading,
  lede,
  leftTitle,
  leftBody,
  rightTitle,
  rightBody,
}: Props) {
  const [ledeMain, ...ledeRest] = splitParagraphs(lede);

  return (
    <section id={sectionConfig?.sectionId || undefined}>
      <div className="wrap feel-grid">
        <div className="reveal">
          <h2 className="h2big" style={{ maxWidth: "19ch" }}>
            {formatHeading(heading)}
          </h2>
          {ledeMain ? <p className="lede">{ledeMain}</p> : null}
          {ledeRest.length ? (
            <div className="pivot">
              <span className="pc">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12l5 5L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p>
                {ledeRest.map((para, index) => {
                  const boldMatch = para.match(/^(Startup culture calls the first one normal\.)\s*(.*)$/i);
                  if (boldMatch) {
                    return (
                      <span key={index}>
                        <b>{boldMatch[1]}</b> {boldMatch[2]}
                      </span>
                    );
                  }
                  return <span key={index}>{para}</span>;
                })}
              </p>
            </div>
          ) : null}
        </div>

        <div className="feel-card reveal">
          <div className="fc-row before">
            <span className="fc-chip">{leftTitle || "Not normal"}</span>
            <span className="fc-ico">
              <svg viewBox="0 0 34 34" aria-hidden="true" strokeLinecap="round">
                <path d="M11 12 C 7 6, 20 3, 24 11 C 28 19, 14 25, 9 18 C 4 11, 22 6, 26 15 C 30 24, 12 30, 7 21" />
                <path d="M8 15 C 14 7, 27 13, 23 22 C 19 31, 6 27, 7 18" />
              </svg>
            </span>
            <p>{leftBody}</p>
          </div>
          <div className="fc-sep">
            <span className="ln" />
            <span className="dn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="ln" />
          </div>
          <div className="fc-row after">
            <span className="fc-chip c">{rightTitle || "Normal"}</span>
            <span className="fc-ico c">
              <svg viewBox="0 0 34 34" aria-hidden="true" strokeLinejoin="round">
                <path d="M8 4h13l6 6v20H8z" />
                <path d="M20 4v6h6" />
                <path d="M12 16l2 2 4-4M12 23l2 2 4-4" />
                <circle cx="24" cy="24" r="5" />
                <path d="M22 24l1.5 1.5L26.5 22" strokeLinecap="round" />
              </svg>
            </span>
            <p>
              {(rightBody || "")
                .split(/(?<=\.)\s+/)
                .filter(Boolean)
                .map((chunk, index) => (
                  <b key={index}>{chunk}{index < (rightBody || "").split(/(?<=\.)\s+/).filter(Boolean).length - 1 ? " " : ""}</b>
                ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
