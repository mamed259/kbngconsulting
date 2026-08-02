import type { FdCaseSectionData } from "@/types/strapi";

type Props = Omit<FdCaseSectionData, "__component">;

function splitParagraphs(text?: string) {
  return (text || "")
    .split(/\n\n+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

const STORY_ICONS = [
  <svg key="radar" viewBox="0 0 26 26" aria-hidden="true">
    <path d="M3 18a10 10 0 0120 0z" strokeLinejoin="round" />
    <path d="M13 8V4M2 18h22" strokeLinecap="round" />
  </svg>,
  <svg key="clock" viewBox="0 0 26 26" aria-hidden="true">
    <circle cx="13" cy="13" r="10" />
    <path d="M13 7v6l4 3" strokeLinecap="round" />
  </svg>,
  <svg key="doc" viewBox="0 0 26 26" aria-hidden="true">
    <path d="M6 3h9l5 5v15H6z" strokeLinejoin="round" />
    <path d="M15 3v5h5" />
    <path d="M15 13h-4a2 2 0 000 4h2a2 2 0 010 4h-4M13 11v2M13 21v2" strokeLinecap="round" />
  </svg>,
];

function formatHeading(heading: string) {
  const match = heading.match(/^(.*)(\bno(?:\s+first customer)?\.?)$/i);
  if (!match) return heading;
  return (
    <>
      {match[1]}
      <span className="mark c">{match[2]}</span>
    </>
  );
}

export function FdCase({
  sectionConfig,
  kicker,
  heading,
  subheading,
  story,
  outcome,
  quote,
}: Props) {
  const storyParas = splitParagraphs(story).filter(
    (para) => !/^What I asked/i.test(para) && !/^What was actually true/i.test(para),
  );
  const askedBlock = splitParagraphs(story).find((para) => /^What I asked/i.test(para));
  const trueBlock = splitParagraphs(story).find((para) => /^What was actually true/i.test(para));
  const outcomeParas = splitParagraphs(outcome);
  const sameLine = outcomeParas[0] || "";
  const innerLine = outcomeParas.slice(1).join(" ");

  const askRows = askedBlock
    ? askedBlock
        .replace(/^What I asked\s*[—–-]?\s*/i, "")
        .split(/(?=(?:Who|What) is your )/i)
        .map((chunk) => chunk.trim())
        .filter(Boolean)
        .map((chunk) => {
          const m = chunk.match(/^(.+\?)\s*(.+)$/);
          return m ? { q: m[1].trim(), a: m[2].trim() } : { q: chunk, a: "" };
        })
    : [];

  const trueRows = trueBlock
    ? trueBlock
        .replace(/^What was actually true\s*[—–-]?\s*/i, "")
        .split(/(?=(?:His\s))/i)
        .map((chunk) => chunk.trim())
        .filter(Boolean)
    : [];

  return (
    <section id={sectionConfig?.sectionId || "case"}>
      <div className="wrap">
        <div className="head reveal">
          {kicker ? (
            <span className="kicker">
              <span className="flag-row logo-mark">
                <span className="flag mint" />
                <span className="flag yellow" />
                <span className="flag coral" />
              </span>
              {kicker}
            </span>
          ) : null}
          <h2>
            {subheading ? <span className="lead-in">{subheading}</span> : null}
            {formatHeading(heading)}
          </h2>
        </div>

        <div className="case3 reveal">
          <div className="c3-story">
            {storyParas.map((para, index) => (
              <div className="tl-item" key={index}>
                <span className="tl-ico">{STORY_ICONS[index % STORY_ICONS.length]}</span>
                <p>{para}</p>
              </div>
            ))}
          </div>

          {(askRows.length > 0 || trueRows.length > 0) && (
            <div className="c3-ask">
              {askRows.length > 0 ? (
                <>
                  <span className="ct2">What I asked</span>
                  {askRows.map((row) => (
                    <div className="askrow" key={row.q}>
                      <span className="ask-ic">
                        <svg viewBox="0 0 22 22" aria-hidden="true">
                          <circle cx="11" cy="7" r="4" />
                          <path d="M3 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
                        </svg>
                      </span>
                      <span className="qq">{row.q}</span>
                      <svg className="ar" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="aa">{row.a}</span>
                    </div>
                  ))}
                </>
              ) : null}

              {trueRows.length > 0 ? (
                <>
                  <span className="ct2" style={{ marginTop: "24px", display: "block" }}>
                    What was actually true
                  </span>
                  {trueRows.map((row) => (
                    <div className="truerow" key={row}>
                      <svg viewBox="0 0 20 20" aria-hidden="true">
                        <circle cx="10" cy="10" r="9" />
                        <path
                          d="M6 10l3 3 5-5"
                          stroke="#fff"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{row}</span>
                    </div>
                  ))}
                </>
              ) : null}
            </div>
          )}

          <div className="c3-res">
            <span className="ct2">The result</span>
            {quote ? <p className="rq">{quote.startsWith('"') ? quote : `"${quote}"`}</p> : null}
            {sameLine ? (
              <p className="same">
                {sameLine.split(/(?<=\.)\s+/).map((chunk, index, arr) => {
                  const isLast = index === arr.length - 1;
                  return (
                    <span key={chunk}>
                      {isLast ? <b>{chunk}</b> : chunk}
                      {index < arr.length - 1 ? <br /> : null}
                    </span>
                  );
                })}
              </p>
            ) : null}
            {innerLine ? <p className="inner">{innerLine}</p> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
