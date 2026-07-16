import type { GeOfferData } from "@/types/strapi";
import { parseStringList } from "@/components/sections/cw/shared";

export function GeOfferCard({ offer }: { offer: GeOfferData }) {
  const practices = parseStringList(offer.practices);
  const chips = parseStringList(offer.chips);

  return (
    <div className="ocard reveal">
      <h3>{offer.title}</h3>
      {offer.quoteLine ? <p className="quote-line">{offer.quoteLine}</p> : null}
      {offer.what ? <p className="what">{offer.what}</p> : null}
      {practices.length ? (
        <ul className="plist">
          {practices.map((practice) => (
            <li key={practice}>{practice}</li>
          ))}
        </ul>
      ) : null}
      {chips.length ? (
        <div className="chips">
          {chips.map((chip) => (
            <span className="chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
      ) : null}
      {offer.audience ? (
        <p className="for">
          <b>For</b>
          {offer.audience}
        </p>
      ) : null}
    </div>
  );
}
