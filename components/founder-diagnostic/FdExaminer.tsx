import Image from "next/image";
import type { FdExaminerSectionData } from "@/types/strapi";
import { sanitizeArticleHtml } from "@/lib/article-body";
import { extractStrapiImageUrl } from "@/lib/utils";

type Props = Omit<FdExaminerSectionData, "__component">;

function looksLikeHtml(content: string) {
  return /<\/?[a-z][\s\S]*>/i.test(content.trim());
}

function stripTags(value: string) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function linkifyMarkdown(value: string) {
  return value.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_full, label: string, href: string) => {
    const external = /^https?:\/\//i.test(href);
    const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
    return `<a href="${href}"${attrs}>${label}</a>`;
  });
}

function splitParagraphs(text?: string) {
  const raw = (text || "").trim();
  if (!raw) return [];

  if (/<p\b/i.test(raw) || /<h[1-6]\b/i.test(raw)) {
    const blocks = raw.match(/<(p|h[1-6])\b[^>]*>[\s\S]*?<\/\1>/gi);
    if (blocks?.length) return blocks.map((block) => block.trim());
  }

  return raw
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
  const plain = stripTags(para);
  return (
    plain.length < 90 &&
    (/\?$/.test(plain) || /^(Why did I|So why)/i.test(plain)) &&
    !plain.includes(". ")
  );
}

function wrapHtml(html: string) {
  const trimmed = html.trim();
  if (/^<(p|h[1-6]|div|ul|ol)\b/i.test(trimmed)) return trimmed;
  return `<p>${trimmed}</p>`;
}

function RichBlock({ html, className }: { html: string; className?: string }) {
  const linked = linkifyMarkdown(html);
  const markup = wrapHtml(looksLikeHtml(linked) ? linked : linked.replace(/\n/g, "<br />"));
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizeArticleHtml(markup) }}
    />
  );
}

function emphasizeJuliaLead(html: string) {
  return html.replace(/(^|>)(\s*)I am Julia Georgi\./i, "$1$2<b>I am Julia Georgi.</b>");
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

        <div className="reveal exam-copy">
          <h2>{formatHeading(heading)}</h2>
          {intro.map((para, index) => (
            <RichBlock
              key={index}
              html={index === 0 ? emphasizeJuliaLead(para) : para}
            />
          ))}
          {blocks.length ? (
            <div className="origin">
              {blocks.map((block, index) => (
                <div className="oblock" key={stripTags(block.title) || index}>
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
                  <h3>{stripTags(block.title)}</h3>
                  {block.paras.map((para, paraIndex) => (
                    <RichBlock key={`${stripTags(para).slice(0, 40)}-${paraIndex}`} html={para} />
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
