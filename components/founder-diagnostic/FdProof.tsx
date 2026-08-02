import type { FdProofSectionData } from "@/types/strapi";

type Props = Omit<FdProofSectionData, "__component">;

function formatHeading(heading: string) {
  const match = heading.match(/^(What changed)\b(.*)$/i);
  if (!match) return heading;
  return (
    <>
      <span className="mark c">{match[1]}</span>
      {match[2]}
    </>
  );
}

export function FdProof({ sectionConfig, heading, cards = [] }: Props) {
  return (
    <section id={sectionConfig?.sectionId || "proof"}>
      <div className="wrap">
        <div className="head reveal">
          <h2>{formatHeading(heading)}</h2>
        </div>
        <div className="res3">
          {cards.map((card) => (
            <div className="rc reveal" key={card.id ?? card.name}>
              <div className="who">{card.name}</div>
              {card.niche ? <div className="what">{card.niche}</div> : null}
              <div className="rc-row">
                <span className="rl">Blind spot</span>
                {card.blindSpot ? <b className="bsv">{card.blindSpot}</b> : null}
                {card.body ? <p>{card.body}</p> : null}
              </div>
              {card.changeBody ? (
                <div className="rc-row">
                  <span className="rl">What changed</span>
                  <p>{card.changeBody}</p>
                </div>
              ) : null}
              {card.changeLabel ? (
                <div className="out">
                  {card.changeLabel}
                  {/first poc demand/i.test(card.changeLabel) ? (
                    <span className="coinc">This could be a coincidence. Alex does not think so.</span>
                  ) : null}
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className="testi reveal">
          <p>
            &quot;I highly recommend working with Julia. She is an expert. She was vital to the
            success of critical deployments and GTM strategies.&quot;
          </p>
          <div className="src">Matthew Smith · verified Google review</div>
        </div>
      </div>
    </section>
  );
}
