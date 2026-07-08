import type { SolutionsSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { extractStrapiImageUrl } from "@/lib/utils";

type SolutionsSectionProps = Omit<SolutionsSectionData, "__component">;

function accentClass(theme?: string) {
  switch (theme) {
    case "green":
      return "acc-mint";
    case "coral":
      return "acc-coral";
    case "slate":
      return "acc-slate";
    default:
      return "acc-yellow";
  }
}

function splitHeading(heading: string) {
  const [first, ...rest] = heading.split(":");
  if (!rest.length) return null;
  return {
    first: `${first.trim()}:`,
    second: rest.join(":").trim(),
  };
}

function featuredTagline(title: string): string | null {
  if (title === "Canary Waves") {
    return "Voice-to-data safety intelligence for mining and quarrying.";
  }
  if (title === "Georgia") {
    return "Human-performance AI for the conversations that move money.";
  }
  return null;
}

function tileTag(title: string) {
  if (title === "Vision AI") return "Computer vision";
  if (title === "Market Analysis") return "Market intelligence";
  if (title === "Configure Price Quote") return "Quoting engine";
  return "Studio";
}

export function SolutionsSection({ heading, intro, cards }: SolutionsSectionProps) {
  const featured = cards.slice(0, 2);
  const secondary = cards.slice(2);
  const headingParts = splitHeading(heading);

  return (
    <section id="solutions">
      <Container>
        <h2 className="reveal" style={{ fontSize: "clamp(1.9rem,4.6vw,3rem)", lineHeight: 1.12 }}>
          {headingParts ? (
            <>
              <span style={{ color: "var(--yellow)", display: "block" }}>{headingParts.first}</span>
              {headingParts.second}
            </>
          ) : (
            heading
          )}
        </h2>
        {intro ? <p className="secnote reveal">{intro}</p> : null}
        <p className="reveal" style={{ color: "var(--yellow)", fontWeight: 700, margin: "0 0 28px" }}>
          Our flagship Industrial Innovation projects started in 2025.
        </p>

        <div className="products flagships" style={{ textAlign: "left" }}>
          {featured.map((card) => {
            const imageUrl = extractStrapiImageUrl(card.image || card.imageUrl);
            const tagline = featuredTagline(card.title);
            return (
              <article key={card.id} className="flagship reveal">
                <div className="body">
                  <h3>{card.title}</h3>
                  {tagline ? <p className="tagline">{tagline}</p> : null}
                  {card.body ? <p>{card.body}</p> : null}
                  {card.href ? <Button href={card.href}>Book a demo</Button> : null}
                </div>
                <div
                  className={`media ${accentClass(card.accentTheme)}`}
                  style={
                    imageUrl
                      ? {
                          backgroundImage: `url("${imageUrl}")`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : undefined
                  }
                />
              </article>
            );
          })}
        </div>

        {secondary.length ? (
          <>
            <h3 className="reveal" style={{ fontSize: "1.4rem", margin: "8px 0 10px", color: "var(--white)" }}>
              More from the Innovation Studio
            </h3>
            <p className="secnote reveal" style={{ color: "var(--white)" }}>
              Prior to 2025, our focus was the work below, from RFP and tender pricing to
              site-safety systems: AI tools built with operators and experts from the field to solve
              real bottlenecks.
            </p>
            <div className="bento">
              {secondary.map((card, index) => {
                const variant = index === 0 ? "vision" : index === 1 ? "market" : "cpq";
                const imageUrl = extractStrapiImageUrl(card.image || card.imageUrl);
                return (
                  <article key={card.id} className={`tile photo ${variant} reveal`}>
                    <div
                      className="tile-img"
                      style={
                        imageUrl
                          ? {
                              backgroundImage: `url("${imageUrl}")`,
                            }
                          : undefined
                      }
                    />
                    <div className="tile-body">
                      <span className="tile-tag">{tileTag(card.title)}</span>
                      <h3>{card.title}</h3>
                      {card.body ? <p>{card.body}</p> : null}
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="quote warm reveal">
              <span className="mark">&ldquo;</span>
              <p>
                We stay ahead of where the technology is heading, so every client gets the best
                solution, not the obvious one.
              </p>
            </div>
          </>
        ) : null}
      </Container>
    </section>
  );
}
