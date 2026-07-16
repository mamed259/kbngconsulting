import type { CsOfferData } from "@/types/strapi";
import { parseStringList } from "@/components/sections/cw/shared";

export function CsOfferCard({ offer }: { offer: CsOfferData }) {
  const chips = parseStringList(offer.chips);
  const segments = parseStringList(offer.segments);

  return (
    <div className="ocard reveal">
      <h3>{offer.title}</h3>
      {offer.what ? <p className="what">{offer.what}</p> : null}
      {chips.length ? (
        <div className="chips">
          {chips.map((chip) => (
            <span className="chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
      ) : null}
      {segments.length ? (
        <div className="segs">
          {segments.map((seg) => (
            <span className="seg" key={seg}>
              <b>{seg}</b>
            </span>
          ))}
        </div>
      ) : null}
      {offer.result ? <p className="res">{offer.result}</p> : null}
      {offer.audience ? <p className="for">{offer.audience}</p> : null}
      {offer.note ? <p className="note">{offer.note}</p> : null}
    </div>
  );
}
