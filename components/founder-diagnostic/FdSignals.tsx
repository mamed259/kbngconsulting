import type { CSSProperties, ReactNode } from "react";
import type { FdSignalsSectionData } from "@/types/strapi";

type Props = Omit<FdSignalsSectionData, "__component">;

const SIG_STYLES: CSSProperties[] = [
  { "--sc": "var(--s1)", "--sl": "var(--s1)", "--tint": "var(--t1)", "--cardbg": "var(--sig-card)" } as CSSProperties,
  {
    "--sc": "var(--s2)",
    "--sl": "var(--s2)",
    "--tint": "var(--t2)",
    "--hl": "rgba(255,242,117,.9)",
    "--cardbg": "var(--sig-card)",
  } as CSSProperties,
  { "--sc": "var(--s3)", "--sl": "var(--s3)", "--tint": "var(--t3)", "--cardbg": "var(--sig-card)" } as CSSProperties,
  { "--sc": "var(--s4)", "--sl": "var(--s4)", "--tint": "var(--t4)", "--cardbg": "var(--sig-card)" } as CSSProperties,
  { "--sc": "var(--s5)", "--sl": "var(--s5)", "--tint": "var(--t2)", "--cardbg": "var(--sig-card)" } as CSSProperties,
];

const SIG_ICONS: ReactNode[] = [
  <svg key="funnel" className="sig-icon" viewBox="0 0 52 46" aria-hidden="true">
    <path
      d="M4 4h44L34 26v18l-12 6V26z"
      strokeWidth="2.2"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity=".16"
    />
  </svg>,
  <svg key="wave" className="sig-icon" viewBox="0 0 52 46" aria-hidden="true">
    <path
      d="M2 23h4M9 15v16M15 7v32M21 3v40M27 11v24M33 18v10M39 21v4M45 23h4M51 23h1"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>,
  <svg key="arrow" className="sig-icon" viewBox="0 0 52 46" aria-hidden="true">
    <path
      d="M3 40 C13 40, 15 12, 27 12 S37 26, 49 6"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M40 4h10v10" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="circles" className="sig-icon" viewBox="0 0 52 46" aria-hidden="true">
    <circle cx="19" cy="23" r="14" strokeWidth="2.2" />
    <circle cx="33" cy="23" r="14" strokeWidth="2.2" />
    <path
      d="M26 10a14 14 0 000 26 14 14 0 000-26z"
      fill="currentColor"
      fillOpacity=".28"
      stroke="none"
    />
  </svg>,
  <svg key="peak" className="sig-icon" viewBox="0 0 52 46" aria-hidden="true">
    <path
      d="M2 42 L15 22 L23 30 L36 6 L50 42z"
      strokeWidth="2.2"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity=".16"
    />
  </svg>,
];

function formatQuote(quote: string) {
  const trimmed = quote.trim();
  const withoutQuotes = trimmed.replace(/^["“]|["”]$/g, "");
  const parts = withoutQuotes.split(/(?<=[.!?])\s+/);
  if (parts.length < 2) {
    return <>“{withoutQuotes}”</>;
  }
  const lead = parts.slice(0, -1).join(" ");
  const tail = parts[parts.length - 1];
  return (
    <>
      “{lead} <span className="u-line">{tail.replace(/\.$/, "")}</span>
      {tail.endsWith(".") ? "." : ""}”
    </>
  );
}

function splitHardQuestion(quote: string) {
  const trimmed = quote.trim().replace(/^["“]|["”]$/g, "");
  const qMatch = trimmed.match(/^(.+\?)\s*([\s\S]*)$/);
  if (!qMatch) return { question: trimmed, answer: "" };
  return { question: qMatch[1], answer: qMatch[2].trim() };
}

function formatHeading(heading: string) {
  const match = heading.match(/^(.*)\b(last month\??)\s*$/i);
  if (!match) return heading;
  return (
    <>
      {match[1]}
      <span className="mark c">{match[2]}</span>
    </>
  );
}

export function FdSignals({ sectionConfig, heading, items = [], closing }: Props) {
  const regular = items.filter((item) => !/hardest question/i.test(item.label));
  const hard = items.find((item) => /hardest question/i.test(item.label));

  return (
    <section id={sectionConfig?.sectionId || undefined}>
      <div className="wrap">
        <div className="sig-head">
          <div className="reveal" style={{ maxWidth: "760px" }}>
            <h2>{formatHeading(heading)}</h2>
          </div>
        </div>

        <div className="sigs">
          {regular.map((item, index) => (
            <div
              className="sig reveal"
              key={item.id ?? `${item.label}-${index}`}
              style={SIG_STYLES[index % SIG_STYLES.length]}
            >
              <div className="sig-row">
                <span className="art-blob">{SIG_ICONS[index % SIG_ICONS.length]}</span>
                <span className="sig-lab">{item.label}</span>
              </div>
              <p className="sig-q">{formatQuote(item.quote)}</p>
            </div>
          ))}

          {hard ? (
            <div className="hardq reveal" style={{ "--sc": "#fff", "--sl": "#fff" } as CSSProperties}>
              <span className="ghost">”</span>
              <div className="sig-row">
                <span className="sig-lab">{hard.label}</span>
              </div>
              {(() => {
                const { question, answer } = splitHardQuestion(hard.quote);
                const qInner = question.replace(/^["“]|["”]$/g, "").replace(/\?$/, "");
                return (
                  <>
                    <p className="sig-q">
                      “
                      {/startup material/i.test(qInner) ? (
                        <>
                          What if I&apos;m <i>just not startup material?</i>
                        </>
                      ) : (
                        <>
                          {qInner}?
                        </>
                      )}
                      ”
                    </p>
                    {answer ? (
                      <div className="hq-ans">
                        <svg
                          viewBox="0 0 44 44"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          <path d="M22 5l15 5.5v9c0 9.5-6.5 16-15 18.5-8.5-2.5-15-9-15-18.5v-9z" />
                          <path d="M16 22l4 4 8-8" />
                        </svg>
                        <p>{answer}</p>
                      </div>
                    ) : null}
                  </>
                );
              })()}
              <a className="btn btn-black" href="#book">
                Run the Blind Spot Diagnostic
                <svg className="arrow" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          ) : null}
        </div>

        {closing ? (
          <p className="sig-close reveal">
            {/you ahead of most founders/i.test(closing) ? (
              <>
                {closing.replace(/\s*Naming it puts you ahead of most founders\.?\s*$/i, "")} Naming it
                puts <b>you ahead of most founders.</b>
              </>
            ) : (
              closing
            )}
          </p>
        ) : null}
      </div>
    </section>
  );
}
