import Image from "next/image";
import Link from "next/link";
import type { CsHeroSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { extractStrapiImageUrl } from "@/lib/utils";

type Props = Omit<CsHeroSectionData, "__component">;

export function CsHeroSection({
  heading,
  subtitle,
  lead,
  trustLabel,
  primaryCtaText,
  primaryCtaHref,
  logos,
}: Props) {
  return (
    <>
      <section className="hero">
        <Container>
          <div className="hero-row">
            <div>
              <h1 className="reveal">{heading}</h1>
              {subtitle ? <p className="sub reveal">{subtitle}</p> : null}
            </div>
            <div className="flag-row reveal">
              <span className="flag yellow" />
              <span className="flag coral" />
              <span className="flag mint" />
            </div>
          </div>
          {lead ? <p className="lead reveal">{lead}</p> : null}
          {primaryCtaText && primaryCtaHref ? (
            <Link className="lets-talk reveal" href={primaryCtaHref} style={{ marginTop: "1.5rem", display: "inline-flex" }}>
              {primaryCtaText}
            </Link>
          ) : null}
        </Container>
      </section>

      {logos?.length ? (
        <div className="clients">
          <Container className="reveal">
            {trustLabel ? <p className="label">{trustLabel}</p> : null}
            <div className="logo-row">
              {logos.map((logo) => {
                const src = extractStrapiImageUrl(logo.image || logo.imageUrl);
                if (!src) return null;
                return (
                  <span className="logo" key={logo.id}>
                    <Image src={src} alt={logo.label} width={120} height={25} style={{ height: "25px", width: "auto" }} />
                  </span>
                );
              })}
            </div>
          </Container>
        </div>
      ) : null}
    </>
  );
}
