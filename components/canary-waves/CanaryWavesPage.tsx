import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { canaryWavesContent as c } from "@/content/canary-waves";
import { CwNetworkIcon, CwRadioIcon, CwToneIcon, CwWaveformIcon } from "@/components/canary-waves/CwIcons";
import { cwThemeStyle, cwThemes } from "@/components/canary-waves/types";

function CultureIcon({ type }: { type: "radio" | "tone" | "network" }) {
  if (type === "radio") return <CwRadioIcon />;
  if (type === "tone") return <CwToneIcon />;
  return <CwNetworkIcon />;
}

export function CanaryWavesPage() {
  return (
    <main className="cw-page">
      {/* Hero */}
      <section className="hero">
        <Container>
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-row">
                <div>
                  <h1 className="reveal">{c.hero.title}</h1>
                  <p className="sub reveal">{c.hero.subtitle}</p>
                </div>
                <div className="flag-row reveal">
                  <span className="flag mint" />
                  <span className="flag yellow" />
                  <span className="flag coral" />
                </div>
              </div>
              <p className="lead reveal">{c.hero.lead}</p>
              <div className="hero-cta reveal">
                <Link className="btn btn-solid" href={c.hero.primaryCta.href}>
                  {c.hero.primaryCta.label}
                </Link>
                <Link className="cw-btn-ghost" href={c.hero.secondaryCta.href}>
                  {c.hero.secondaryCta.label}
                </Link>
              </div>
            </div>
            <div className="hero-art reveal">
              <Image
                src={c.hero.image}
                alt={c.hero.imageAlt}
                width={960}
                height={720}
                priority
                sizes="(min-width: 920px) 45vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="clients" style={{ padding: "46px 0" }}>
        <Container>
          <div className="reveal">
            <p className="label">{c.stats.label}</p>
            <div className="stats">
              {c.stats.items.map((stat) => (
                <div key={stat.value} className="stat">
                  <div className="snum">{stat.value}</div>
                  <p className="slbl">{stat.label}</p>
                  <p className="ssrc">{stat.source}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Insight */}
      <section className="service alt" style={cwThemeStyle(cwThemes.yellow)}>
        <Container>
          <div className="service-head">
            <div className="text">
              <p className="kicker reveal">
                <span className="flag" />
                {c.insight.kicker}
              </p>
              <h2 className="reveal">{c.insight.heading}</h2>
              <p className="promise reveal">{c.insight.promise}</p>
            </div>
            <div className="visual reveal">
              <div className="hero-art">
                <Image
                  src={c.insight.image}
                  alt={c.insight.imageAlt}
                  width={960}
                  height={600}
                  sizes="(min-width: 860px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
          <div className="gap-strip reveal">
            <div className="gs">
              <span className="gs-num">{c.insight.gapStrip[0].num}</span>
              <span className="gs-txt">{c.insight.gapStrip[0].text}</span>
            </div>
            <div className="gs-div" />
            <div className="gs">
              <span className="gs-num">{c.insight.gapStrip[1].num}</span>
              <span className="gs-txt">
                {c.insight.gapStrip[1].text}{" "}
                <b className="gs-until">{c.insight.gapStrip[1].until}</b>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Issues */}
      <section id={c.issues.id} className="service" style={cwThemeStyle(cwThemes.yellow)}>
        <Container>
          <div className="service-head">
            <div className="text" style={{ flex: "1 1 auto", maxWidth: "74ch" }}>
              <p className="kicker reveal">
                <span className="flag" />
                {c.issues.kicker}
              </p>
              <h2 className="reveal">{c.issues.heading}</h2>
              <p className="promise reveal" style={{ maxWidth: "74ch" }}>
                {c.issues.promise}
              </p>
            </div>
          </div>
          <div className="offers">
            {c.issues.cards.map((card) => (
              <article
                key={card.title}
                className="ocard reveal"
                style={cwThemeStyle(cwThemes[card.theme])}
              >
                <h3>{card.title}</h3>
                <p className="quote-line">
                  <CwWaveformIcon color="var(--t)" />
                  <span>{card.quote}</span>
                </p>
                <p className="what">{card.body}</p>
                <ul className="plist">
                  {card.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="for">
                  <b>For</b>
                  {card.forLabel}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Culture */}
      <section className="service alt" style={cwThemeStyle(cwThemes.mint)}>
        <Container>
          <div className="service-head">
            <div className="text" style={{ flex: "1 1 auto", maxWidth: "74ch" }}>
              <p className="kicker reveal">
                <span className="flag" />
                {c.culture.kicker}
              </p>
              <h2 className="reveal">{c.culture.heading}</h2>
              <p className="promise reveal" style={{ maxWidth: "74ch" }}>
                {c.culture.promise}
              </p>
            </div>
          </div>
          <div className="ccards">
            {c.culture.cards.map((card) => (
              <article key={card.title} className="ccard reveal">
                <Image src={card.image} alt={card.imageAlt} width={640} height={360} />
                <div className="cc-in">
                  <div className="cc-head">
                    <span className="cc-ico">
                      <CultureIcon type={card.icon} />
                    </span>
                    <h3>{card.title}</h3>
                  </div>
                  <p>{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Pills */}
      <section className="cw-pills-band" style={cwThemeStyle(cwThemes.mint)}>
        <Container>
          <div className="reveal">
            <p className="label">{c.pills.label}</p>
            <div className="pills">
              {c.pills.items.map((pill) => (
                <span key={pill} className="pill">
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Workflow */}
      <section id={c.workflow.id} className="abe">
        <Container>
          <div className="head reveal">
            <span className="flag mint" />
            <h2>{c.workflow.heading}</h2>
          </div>
          <p className="sub reveal">{c.workflow.sub}</p>
          <div className="steps">
            {c.workflow.steps.map((step) => (
              <div key={step.num} className="step reveal">
                <div className="k">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Adopt */}
      <section className="service alt" style={cwThemeStyle(cwThemes.blue)}>
        <Container>
          <div className="service-head">
            <div className="text" style={{ flex: "1 1 auto", maxWidth: "72ch" }}>
              <p className="kicker reveal">
                <span className="flag" />
                {c.adopt.kicker}
              </p>
              <h2 className="reveal">{c.adopt.heading}</h2>
              <p className="promise reveal" style={{ maxWidth: "72ch" }}>
                {c.adopt.promise}
              </p>
            </div>
          </div>
          <div className="aud">
            {c.adopt.cards.map((card) => (
              <div key={card.title} className="acard reveal">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
          <p className="promise reveal" style={{ marginTop: "24px" }}>
            {c.adopt.footnote}
          </p>
        </Container>
      </section>

      {/* Quote */}
      <section>
        <Container>
          <div className="quote-band reveal">
            <div className="quote-wrap">
              <span className="qmark">&ldquo;</span>
              <div>
                <p>{c.quote.text}</p>
                <p className="attr">{c.quote.attr}</p>
              </div>
            </div>
          </div>
          <p className="promise reveal" style={{ textAlign: "center", maxWidth: "80ch", margin: "22px auto 0" }}>
            {c.quote.footnote}
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <section className="faq">
        <Container>
          <h2 className="reveal">{c.faq.heading}</h2>
          <div className="faq-list">
            {c.faq.items.map((item) => (
              <div key={item.q} className="qa reveal">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="cta">
        <Container>
          <h2 className="reveal">{c.cta.heading}</h2>
          <p className="reveal">{c.cta.body}</p>
          <div className="cta-row reveal">
            <Link className="btn btn-solid" href={c.cta.primary.href}>
              {c.cta.primary.label}
            </Link>
            <Link className="cw-btn-ghost" href={c.cta.secondary.href}>
              {c.cta.secondary.label}
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
