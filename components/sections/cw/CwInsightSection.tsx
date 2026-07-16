import Image from "next/image";
import { Fragment } from "react";
import type { CwInsightSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { extractStrapiImageUrl } from "@/lib/utils";
import { cwThemeStyle, cwThemes } from "@/components/canary-waves/types";

type Props = Omit<CwInsightSectionData, "__component">;

export function CwInsightSection({
  kicker,
  heading,
  promise,
  image,
  imageUrl,
  imageAlt,
  gapItems,
}: Props) {
  const src = extractStrapiImageUrl(image || imageUrl);

  return (
    <section className="service alt" style={cwThemeStyle(cwThemes.yellow)}>
      <Container>
        <div className="service-head">
          <div className="text">
            {kicker ? (
              <p className="kicker reveal">
                <span className="flag" />
                {kicker}
              </p>
            ) : null}
            <h2 className="reveal">{heading}</h2>
            {promise ? <p className="promise reveal">{promise}</p> : null}
          </div>
          {src ? (
            <div className="visual reveal">
              <div className="hero-art">
                <Image
                  src={src}
                  alt={imageAlt || ""}
                  width={960}
                  height={600}
                  sizes="(min-width: 860px) 50vw, 100vw"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
            </div>
          ) : null}
        </div>
        {gapItems?.length ? (
          <div className="gap-strip reveal">
            {gapItems.map((item, index) => (
              <Fragment key={item.id}>
                {index > 0 ? <div className="gs-div" /> : null}
                <div className="gs">
                  <span className="gs-num">{item.num}</span>
                  <span className="gs-txt">
                    {item.text}
                    {item.until ? (
                      <>
                        {" "}
                        <b className="gs-until">{item.until}</b>
                      </>
                    ) : null}
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
