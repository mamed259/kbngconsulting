import Image from "next/image";
import type { CsServiceSectionData } from "@/types/strapi";
import { extractStrapiImageUrl } from "@/lib/utils";

type Props = Pick<CsServiceSectionData, "visualKind" | "heading" | "image" | "imageUrl" | "imageAlt">;

export function CsServiceVisual({ visualKind, heading, image, imageUrl, imageAlt }: Props) {
  if (visualKind === "image") {
    const src = extractStrapiImageUrl(image || imageUrl);
    if (src) {
      return (
        <Image src={src} alt={imageAlt || heading} fill sizes="(min-width: 860px) 50vw, 100vw" />
      );
    }
  }

  if (visualKind === "commercial") return <CommercialVisual />;
  if (visualKind === "safety") return <SafetyVisual />;
  if (visualKind === "soft-skills") return <SoftSkillsVisual />;
  return <PricingVisual />;
}

function PricingVisual() {
  const metrics = [
    { label: "Margin", value: "18.7%", sub: "vs target 22%" },
    { label: "Cost/m³", value: "$142", sub: "plant avg" },
    { label: "Discount", value: "6.2%", sub: "vs target 3%" },
    { label: "Win rate", value: "32%", sub: "vs target 40%" },
    { label: "Index", value: "+2.1%", sub: "vs market" },
    { label: "Quotes", value: "847", sub: "this month" },
  ];
  const actions = [
    { label: "Ready mix", value: "+4.2%" },
    { label: "Aggregates", value: "+2.8%" },
    { label: "Asphalt", value: "+5.1%" },
    { label: "Cement", value: "+3.6%" },
  ];

  return (
    <div className="dash">
      <p className="dash-cap">Pricing Control Tower</p>
      <div className="mgrid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {metrics.map((metric) => (
          <div className="mc" key={metric.label}>
            <div className="lbl">{metric.label}</div>
            <div className="val good">{metric.value}</div>
            <div className="vsub">{metric.sub}</div>
          </div>
        ))}
      </div>
      <p className="dash-sub">Recommended price action</p>
      <div className="mgrid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        {actions.map((action) => (
          <div className="mc" key={action.label}>
            <div className="lbl">{action.label}</div>
            <div className="val good">{action.value}</div>
          </div>
        ))}
      </div>
      <div className="impact">
        <span className="impact-cap">
          Expected
          <br />
          margin impact
        </span>
        <div className="col">
          <div className="big">18.2%</div>
          <div className="cap2">Current</div>
        </div>
        <span className="ar">&rarr;</span>
        <div className="col">
          <div className="big proj">21.4%</div>
          <div className="cap2">Projected</div>
        </div>
      </div>
    </div>
  );
}

function CommercialVisual() {
  return (
    <div className="dash">
      <div className="cwrap">
        <div>
          <p className="dash-cap">Account portfolio</p>
          <svg viewBox="0 0 300 230" style={{ width: "100%", height: "auto", marginTop: "8px" }} xmlns="http://www.w3.org/2000/svg">
            <g stroke="rgba(255,255,255,.10)">
              <line x1="44" y1="14" x2="44" y2="196" />
              <line x1="44" y1="196" x2="290" y2="196" />
              <line x1="44" y1="105" x2="290" y2="105" strokeDasharray="3 4" />
              <line x1="167" y1="14" x2="167" y2="196" strokeDasharray="3 4" />
            </g>
            <text x="8" y="105" fill="#5D6E84" fontSize="8" fontFamily="Inter, sans-serif" transform="rotate(-90 8 105)" textAnchor="middle">
              ATTRACTIVENESS
            </text>
            <text x="167" y="216" fill="#5D6E84" fontSize="8" fontFamily="Inter, sans-serif" textAnchor="middle">
              RELATIONSHIP STRENGTH
            </text>
            <g opacity="0.6">
              <circle cx="225" cy="55" r="15" fill="#68FFCF" opacity="0.85" />
              <circle cx="258" cy="78" r="9" fill="#68FFCF" opacity="0.8" />
              <circle cx="205" cy="80" r="7" fill="#68FFCF" opacity="0.8" />
              <circle cx="95" cy="58" r="12" fill="#FFF275" opacity="0.85" />
              <circle cx="120" cy="80" r="7" fill="#FFF275" opacity="0.8" />
              <circle cx="120" cy="150" r="13" fill="#FF5A75" opacity="0.8" />
              <circle cx="92" cy="168" r="7" fill="#FF5A75" opacity="0.75" />
              <circle cx="225" cy="150" r="9" fill="#7aa7d9" opacity="0.8" />
              <circle cx="255" cy="165" r="7" fill="#7aa7d9" opacity="0.75" />
            </g>
          </svg>
        </div>
        <div>
          <p className="dash-cap">Commercial scorecard</p>
          <div className="mgrid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: "8px" }}>
            <div className="mc">
              <div className="lbl">Margin</div>
              <div className="val good">18.7%</div>
              <div className="vsub">vs target 22%</div>
            </div>
            <div className="mc">
              <div className="lbl">Growth</div>
              <div className="val good">6.3%</div>
              <div className="vsub">vs target 8%</div>
            </div>
            <div className="mc">
              <div className="lbl">Win rate</div>
              <div className="val">32%</div>
              <div className="vsub">vs target 40%</div>
            </div>
            <div className="mc">
              <div className="lbl">Discount</div>
              <div className="val up">6.2%</div>
              <div className="vsub">vs target 3%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="ctable">
        <div className="row">
          <span>Top opportunities</span>
          <span>Potential</span>
          <span>Likelihood</span>
        </div>
        <div className="row">
          <span>Price increase, Product A</span>
          <span className="pot">$1.2M</span>
          <span className="lk h">High</span>
        </div>
        <div className="row">
          <span>Cross-sell, Logistics</span>
          <span className="pot">$650K</span>
          <span className="lk m">Medium</span>
        </div>
        <div className="row">
          <span>Contract rebid, Customer B</span>
          <span className="pot">$480K</span>
          <span className="lk h">High</span>
        </div>
      </div>
    </div>
  );
}

function SafetyVisual() {
  return (
    <svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cs-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0d2129" />
          <stop offset="1" stopColor="#070f14" />
        </linearGradient>
        <radialGradient id="cs-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#FF5A75" stopOpacity="0.5" />
          <stop offset="1" stopColor="#FF5A75" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="640" height="400" fill="url(#cs-ground)" />
      <g opacity="0.5" stroke="rgba(255,255,255,.10)" fill="rgba(255,255,255,.02)">
        <path d="M320 250 L470 200 L560 245 L410 295 Z" />
        <path d="M180 240 L320 188 L420 235 L280 288 Z" />
      </g>
      <g stroke="#FF5A75" strokeWidth="1.4" strokeDasharray="2 6" opacity="0.7" fill="none">
        <path d="M320 210 L120 70" />
        <path d="M320 210 L320 60" />
        <path d="M320 210 L520 80" />
        <path d="M320 210 L120 330" />
        <path d="M320 210 L520 330" />
      </g>
      <circle cx="320" cy="210" r="34" fill="url(#cs-glow)" />
      <circle cx="320" cy="210" r="9" fill="#FF5A75" />
      <circle cx="320" cy="210" r="17" fill="none" stroke="#FF5A75" strokeWidth="1.4" opacity="0.6" />
      <g fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700">
        <text x="148" y="66" fill="#fff">
          HAZARD
        </text>
        <text x="348" y="56" fill="#fff">
          ZONE
        </text>
        <text x="495" y="116" fill="#fff" textAnchor="middle">
          FLEET
        </text>
        <text x="148" y="326" fill="#fff">
          EQUIPMENT
        </text>
        <text x="492" y="326" fill="#fff" textAnchor="end">
          COMMS
        </text>
      </g>
    </svg>
  );
}

function SoftSkillsVisual() {
  return (
    <svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="640" height="300" fill="#0a1c24" />
      <text x="320" y="34" fill="#7aa7d9" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" letterSpacing="1.5" textAnchor="middle">
        CONVERSATIONS THAT DRIVE RESULTS
      </text>
      <g fill="none" strokeWidth="1.5">
        <path d="M92 150 C140 120 150 95 188 95" stroke="#68FFCF" strokeDasharray="2 5" opacity="0.7" />
        <path d="M92 150 C140 180 150 205 188 205" stroke="#FFF275" strokeDasharray="2 5" opacity="0.7" />
        <path d="M242 95 C290 110 300 140 338 150" stroke="#68FFCF" strokeDasharray="2 5" opacity="0.7" />
        <path d="M242 205 C290 190 300 160 338 150" stroke="#FFF275" strokeDasharray="2 5" opacity="0.7" />
        <path d="M392 150 H452" stroke="#7aa7d9" opacity="0.8" />
        <path d="M506 150 H566" stroke="#FFF275" opacity="0.8" />
      </g>
      <g fontFamily="Inter, sans-serif" fontWeight="700" fontSize="10">
        <text x="65" y="196" fill="#cdd6df" textAnchor="middle">
          LEADER
        </text>
        <text x="215" y="56" fill="#cdd6df" textAnchor="middle">
          COACHING
        </text>
        <text x="215" y="244" fill="#cdd6df" textAnchor="middle">
          FEEDBACK
        </text>
        <text x="365" y="196" fill="#cdd6df" textAnchor="middle">
          TEAM ALIGNMENT
        </text>
        <text x="479" y="193" fill="#cdd6df" textAnchor="middle">
          BETTER DECISIONS
        </text>
        <text x="593" y="193" fill="#cdd6df" textAnchor="middle">
          STRONGER OUTCOMES
        </text>
      </g>
    </svg>
  );
}
