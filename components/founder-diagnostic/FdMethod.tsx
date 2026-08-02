import type { FdMethodSectionData } from "@/types/strapi";

type Props = Omit<FdMethodSectionData, "__component">;

function splitParagraphs(text?: string) {
  return (text || "")
    .split(/\n\n+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function formatHeading(heading: string) {
  const match = heading.match(/^(.*)(\bNo magic\.?)$/i);
  if (!match) return heading;
  return (
    <>
      {match[1]}
      <span className="mark c">{match[2]}</span>
    </>
  );
}

const BLIND_SPOT_TAGS = [
  "Positioning",
  "Pricing",
  "ICP",
  "Channel",
  "Product scope",
  "Motivation",
  "Co-founder",
  "Stage fit",
];

export function FdMethod({ sectionConfig, heading, lede }: Props) {
  const [ledeMain, ...ledeRest] = splitParagraphs(lede);

  return (
    <section id={sectionConfig?.sectionId || "method"}>
      <div className="wrap feel-grid">
        <div className="reveal">
          <h2 className="h2big" style={{ maxWidth: "14ch" }}>
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
                  const boldMatch = para.match(
                    /^(It works like a Chinese medicine consultation\.)\s*(.*)$/i,
                  );
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

        <div className="imb-card reveal">
          <div className="imb-top">
            <span>Checking</span>
            <span>
              <b>Eight blind spots</b>
            </span>
          </div>
          <div className="imb">
            {BLIND_SPOT_TAGS.map((tag, index) => (
              <span
                key={tag}
                className={index === 0 ? "tag hit" : "tag"}
                style={{ ["--i" as string]: index }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="imb-foot">
            <span>Several will be open</span>
            <b>1 to close first</b>
          </div>
        </div>
      </div>
    </section>
  );
}
