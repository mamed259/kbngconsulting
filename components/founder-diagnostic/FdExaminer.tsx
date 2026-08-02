import Image from "next/image";
import type { FdExaminerSectionData } from "@/types/strapi";
import { extractStrapiImageUrl } from "@/lib/utils";

type Props = Omit<FdExaminerSectionData, "__component">;

function splitParagraphs(text?: string) {
  return (text || "")
    .split(/\n\n+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function formatHeading(heading: string) {
  const match = heading.match(/^(Why)\b(.*)$/i);
  if (!match) return heading;
  return (
    <>
      <span className="mark c">{match[1]}</span>
      {match[2]}
    </>
  );
}

function isSectionHeading(para: string) {
  return (
    para.length < 90 &&
    (/\?$/.test(para) || /^(Why did I|So why)/i.test(para)) &&
    !para.includes(". ")
  );
}

export function FdExaminer({
  sectionConfig,
  heading,
  body,
  stats = [],
  image,
  imageUrl,
  imageAlt,
  linkedInUrl,
  linkedInLabel,
}: Props) {
  const src = extractStrapiImageUrl(image || imageUrl) || "/images/founder-diagnostic/julia.png";
  const paragraphs = splitParagraphs(body);
  const intro: string[] = [];
  const blocks: { title: string; paras: string[] }[] = [];
  let current: { title: string; paras: string[] } | null = null;

  for (const para of paragraphs) {
    if (isSectionHeading(para)) {
      current = { title: para, paras: [] };
      blocks.push(current);
      continue;
    }
    if (current) {
      current.paras.push(para);
    } else {
      intro.push(para);
    }
  }

  return (
    <section id={sectionConfig?.sectionId || "examiner"} style={{ background: "var(--paper-2)" }}>
      <div className="wrap exam">
        <div className="exam-left reveal">
          <div className="portrait">
            {linkedInUrl ? (
              <a
                className="li"
                href={linkedInUrl}
                target="_blank"
                rel="noopener"
                aria-label={linkedInLabel || "LinkedIn"}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.02h4.56V24H.22V8.02zm7.4 0h4.37v2.18h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v9.16h-4.56v-8.12c0-1.94-.03-4.43-2.7-4.43-2.7 0-3.12 2.11-3.12 4.29V24H7.62V8.02z" />
                </svg>
              </a>
            ) : null}
            <Image src={src} alt={imageAlt || "Examiner portrait"} width={640} height={800} />
          </div>
          {stats.length ? (
            <div className="stats">
              {stats.map((stat) => (
                <div className="stat" key={stat.id ?? stat.value}>
                  <b>{stat.value}</b>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="reveal">
          <h2>{formatHeading(heading)}</h2>
          {intro.map((para, index) => {
            if (index === 0 && /^I am Julia Georgi\./i.test(para)) {
              return (
                <p key={index}>
                  <b>I am Julia Georgi.</b> {para.replace(/^I am Julia Georgi\.\s*/i, "")}
                </p>
              );
            }
            return <p key={index}>{para}</p>;
          })}
          {blocks.length ? (
            <div className="origin">
              {blocks.map((block, index) => (
                <div className="oblock" key={block.title}>
                  <svg
                    className="oi"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    {index === 0 ? (
                      <>
                        <circle cx="12" cy="12" r="7" />
                        <circle cx="12" cy="12" r="2.6" />
                        <path d="M12 1.5v3.2M12 19.3v3.2M1.5 12h3.2M19.3 12h3.2" />
                      </>
                    ) : (
                      <>
                        <circle cx="10.5" cy="10.5" r="6.6" />
                        <path d="M15.4 15.4L21 21" />
                      </>
                    )}
                  </svg>
                  <h3>{block.title}</h3>
                  {block.paras.map((para) => (
                    <p key={para.slice(0, 40)}>{para}</p>
                  ))}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
