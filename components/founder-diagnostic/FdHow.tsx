import type { CSSProperties } from "react";

export function FdHow() {
  return (
<section id="how">
  <div className="wrap">
    <div className="head reveal">
      <h2>How does it work?<span className="flag-row logo-mark"><span className="flag mint"></span><span className="flag yellow"></span><span className="flag coral"></span></span></h2>
      <p className="lede">Sixty to ninety minutes of your time. The rest is mine.</p>
    </div>
    <div className="steps">
      <div className="step reveal" style={{"--sn": 'var(--yellow)'} as CSSProperties}><div className="num">1</div><h3>You submit</h3><p>Pay €750 by card or EU/US bank transfer. A light service agreement arrives automatically and I sign an NDA. Then you upload your landing, deck, and numbers, and fill the intake.</p></div>
      <div className="step reveal" style={{"--sn": 'var(--coral)'} as CSSProperties}><div className="num">2</div><h3>Conflict check</h3><p>I review for any conflict with current or past clients. If there is one, I tell you immediately and refund you in full.</p></div>
      <div className="step reveal" style={{"--sn": 'var(--mint)'} as CSSProperties}><div className="num">3</div><h3>I investigate</h3><p>Let me do the work. If I need clarification, I reach out. Otherwise you hear nothing until it lands.</p></div>
      <div className="step reveal" style={{"--sn": 'var(--yellow)'} as CSSProperties}><div className="num">4</div><h3>Your diagnosis lands</h3><p>In 14 days: the detailed written report, a walkthrough if you want one, and <b>lifetime WhatsApp access</b> for any questions after.</p></div>
    </div>
  </div>
</section>
  );
}
