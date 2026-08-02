import type { FdHeroSectionData } from "@/types/strapi";
import { FdChartFoot } from "@/components/founder-diagnostic/FdChartFoot";

type Props = Omit<FdHeroSectionData, "__component">;

function emphasizeDiagnosis(text: string) {
  const match = text.match(/^(.*?)\s+(\S+\s+\S+\.?)$/);
  if (!match) return text;
  return (
    <>
      {match[1]} <em>{match[2]}</em>
    </>
  );
}

export function FdHero({
  sectionConfig,
  heading,
  headingAccent,
  lede,
  ledeBold,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  chartEyebrow,
  chartTitle,
  chartFoot,
  readings,
}: Props) {
  return (
    <section className="hero" id={sectionConfig?.sectionId || "top"}>
      <div className="wrap hero-grid">
        <div className="reveal">
          <h1>
            {heading}
            {headingAccent ? (
              <>
                {" "}
                <span className="c">{headingAccent}</span>
              </>
            ) : null}
          </h1>
          <div className="flag-row">
            <span className="flag mint" />
            <span className="flag yellow" />
            <span className="flag coral" />
          </div>
          {lede || ledeBold ? (
            <p className="lede">
              {ledeBold ? <b>{ledeBold}</b> : null}
              {lede}
            </p>
          ) : null}
          <div className="hero-cta">
            {primaryCtaText && primaryCtaHref ? (
              <a className="btn btn-primary" href={primaryCtaHref}>
                {primaryCtaText}
                <svg className="arrow" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            ) : null}
            {secondaryCtaText && secondaryCtaHref ? (
              <a className="btn btn-ghost" href={secondaryCtaHref}>
                {secondaryCtaText}
              </a>
            ) : null}
          </div>
        </div>
        <div
          className="chart reveal"
          role="img"
          aria-label={`${chartTitle || "Blind Spot Diagnostic"}${chartEyebrow ? `, ${chartEyebrow}` : ""}`}
        >
          <div className="chart-top">
            <span>{chartEyebrow}</span>
            <span>
              <b>{chartTitle}</b>
            </span>
          </div>
          <svg className="pulse" viewBox="0 0 320 44" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 23 L60 23 L74 23 L84 7 L96 39 L108 23 L150 23 L164 23 L176 5 L188 41 L200 23 L320 23" />
          </svg>
          <div className="chart-body">
            <div className="reading">
              {(readings || []).map((row) => (
                <div className="row" key={row.id ?? row.youSaid}>
                  <span className="sym">{row.youSaid}</span>
                  <span className="dx">{emphasizeDiagnosis(row.diagnosis)}</span>
                </div>
              ))}
            </div>
            <div className="radial chart-map" aria-hidden="true">
              <svg className="rsvg" viewBox="0 0 100 95">
                <circle cx="50" cy="50" r="11" fill="rgba(255,90,117,.14)" />
                <polygon
                  points="50.0,13.0 85.2,38.6 71.7,79.9 28.3,79.9 14.8,38.6"
                  fill="none"
                  stroke="rgba(255,255,255,.2)"
                  strokeWidth=".5"
                  strokeDasharray="1.6 1.6"
                />
                <line
                  x1="50"
                  y1="50"
                  x2="50.0"
                  y2="13.0"
                  stroke="rgba(255,255,255,.22)"
                  strokeWidth=".5"
                  strokeDasharray="1.6 1.6"
                />
                <line
                  x1="50"
                  y1="50"
                  x2="14.8"
                  y2="38.6"
                  stroke="rgba(255,255,255,.22)"
                  strokeWidth=".5"
                  strokeDasharray="1.6 1.6"
                />
                <line
                  x1="50"
                  y1="50"
                  x2="85.2"
                  y2="38.6"
                  stroke="rgba(255,255,255,.22)"
                  strokeWidth=".5"
                  strokeDasharray="1.6 1.6"
                />
                <line
                  x1="50"
                  y1="50"
                  x2="28.3"
                  y2="79.9"
                  stroke="rgba(255,255,255,.22)"
                  strokeWidth=".5"
                  strokeDasharray="1.6 1.6"
                />
                <line
                  x1="50"
                  y1="50"
                  x2="71.7"
                  y2="79.9"
                  stroke="rgba(255,255,255,.22)"
                  strokeWidth=".5"
                  strokeDasharray="1.6 1.6"
                />
                <g
                  transform="translate(50,50) scale(.9)"
                  fill="none"
                  stroke="rgba(255,255,255,.62)"
                  strokeWidth=".7"
                  strokeLinecap="round"
                >
                  <path d="M-7 -2 C -9 -8, -1 -10, 3 -6 C 7 -2, 2 4, -3 3 C -8 2, -8 -5, -2 -7 C 4 -9, 9 -3, 7 3 C 5 9, -4 10, -8 5 C -12 0, -9 -8, -2 -9" />
                  <path d="M-5 4 C 0 8, 7 5, 8 0 C 9 -5, 4 -9, -1 -7" />
                  <path d="M6 -5 C 10 -1, 9 6, 4 8 C -1 10, -7 7, -8 2" />
                </g>
              </svg>
              <div className="rnode" style={{ left: "50.0%", top: "13.0%" }}>
                <div className="rbox">
                  <svg
                    className="ric"
                    viewBox="0 0 32 28"
                    fill="none"
                    aria-hidden="true"
                    style={{ color: "var(--s1)" }}
                  >
                    <path
                      d="M6 5h22L19 16v9l-6 3v-12z"
                      fill="currentColor"
                      fillOpacity=".2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                  <div className="rlab">
                    Low
                    <br />
                    conversion
                  </div>
                </div>
              </div>
              <div className="rnode" style={{ left: "14.8%", top: "38.6%" }}>
                <div className="rbox">
                  <svg
                    className="ric"
                    viewBox="0 0 32 28"
                    fill="none"
                    aria-hidden="true"
                    style={{ color: "var(--s2)" }}
                  >
                    <path
                      d="M2 14h3M7 9v10M11 5v18M15 8v12M19 12v4M23 13v2M27 14h3"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="rlab">
                    Poor
                    <br />
                    storytelling
                  </div>
                </div>
              </div>
              <div className="rnode" style={{ left: "85.2%", top: "38.6%" }}>
                <div className="rbox">
                  <svg
                    className="ric"
                    viewBox="0 0 32 28"
                    fill="none"
                    aria-hidden="true"
                    style={{ color: "var(--s3)" }}
                  >
                    <path
                      d="M3 20 C9 20, 11 8, 17 8 S23 15, 29 5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M24 4h6v6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="rlab">
                    Sales
                    <br />
                    reluctance
                  </div>
                </div>
              </div>
              <div className="rnode" style={{ left: "28.3%", top: "79.9%" }}>
                <div className="rbox">
                  <svg
                    className="ric"
                    viewBox="0 0 32 28"
                    fill="none"
                    aria-hidden="true"
                    style={{ color: "var(--s4)" }}
                  >
                    <circle cx="12" cy="14" r="8" stroke="currentColor" strokeWidth="1.6" fill="none" />
                    <circle cx="20" cy="14" r="8" stroke="currentColor" strokeWidth="1.6" fill="none" />
                    <path
                      d="M16 7a8 8 0 000 14 8 8 0 000-14z"
                      fill="currentColor"
                      fillOpacity=".3"
                    />
                  </svg>
                  <div className="rlab">
                    Co-founder
                    <br />
                    misalign.
                  </div>
                </div>
              </div>
              <div className="rnode" style={{ left: "71.7%", top: "79.9%" }}>
                <div className="rbox">
                  <svg
                    className="ric"
                    viewBox="0 0 32 28"
                    fill="none"
                    aria-hidden="true"
                    style={{ color: "var(--s3)" }}
                  >
                    <path
                      d="M2 22 L10 12 L15 17 L22 5 L30 22z"
                      fill="currentColor"
                      fillOpacity=".2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="rlab">
                    Bad business
                    <br />
                    model
                  </div>
                </div>
              </div>
            </div>
          </div>
          {chartFoot ? <FdChartFoot text={chartFoot} /> : null}
        </div>
      </div>
    </section>
  );
}
