import type { CSSProperties } from "react";

export function FdSignals() {
  return (
<section>
  <div className="wrap">
    <div className="sig-head">
      <div className="reveal" style={{maxWidth: '760px'}}>
        <h2><span className="lead-in">Did you spot any of those signals?</span>Then you're already ahead of most founders.</h2>
        <svg className="squiggle" viewBox="0 0 300 13" style={{width: '66%', marginLeft: '12%'}} aria-hidden="true">
          <path d="M4 8 C 62 3, 122 11, 182 5 S 258 3, 296 8" stroke="var(--s1)" strokeWidth="3.4" fill="none" strokeLinecap="round" />
          <path d="M14 12 C 70 8, 130 13, 196 9" stroke="var(--s1)" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity=".55" />
        </svg>
        <p className="lede">Only founders who are serious about the business ever recognize these.</p>
      </div>
    </div>

    <div className="sigs">

      <div className="sig reveal" style={{"--sc": 'var(--s1)', "--sl": 'var(--s1)', "--tint": 'var(--t1)', "--cardbg": 'var(--sig-card)'} as CSSProperties}>
        <div className="sig-row">
          <span className="art-blob"><svg className="sig-icon" viewBox="0 0 52 46" aria-label="Funnel"><path d="M4 4h44L34 26v18l-12 6V26z" strokeWidth="2.2" strokeLinejoin="round" fill="currentColor" fillOpacity=".16" /></svg></span>
          <div>
            <span className="sig-lab">Low conversion</span>
            <p className="sig-q">“Every call goes well. <span className="u-line">Nobody ever signs.</span>”</p>
          </div>
        </div>
        <div className="sig-panel">
          <div className="sig-sig">Conversations are pleasant, but your offer lacks urgency or differentiation.</div>
        </div>
      </div>

      <div className="sig reveal" style={{"--sc": 'var(--s2)', "--sl": 'var(--s2)', "--tint": 'var(--t2)', "--hl": 'rgba(255,242,117,.9)', "--cardbg": 'var(--sig-card)'} as CSSProperties}>
        <div className="sig-row">
          <span className="art-blob"><svg className="sig-icon" viewBox="0 0 52 46" aria-label="Flat waveform"><path d="M2 23h4M9 15v16M15 7v32M21 3v40M27 11v24M33 18v10M39 21v4M45 23h4M51 23h1" strokeWidth="2.4" strokeLinecap="round" /></svg></span>
          <div>
            <span className="sig-lab">Poor storytelling</span>
            <p className="sig-q">“An investor asked who my customer was. I talked for two minutes and watched him <span className="u-line">stop listening.</span>”</p>
          </div>
        </div>
        <div className="sig-panel">
          <div className="sig-sig">Your story is unclear, overly complex, or not emotionally compelling.</div>
        </div>
      </div>

      <div className="sig reveal" style={{"--sc": 'var(--s3)', "--sl": 'var(--s3)', "--tint": 'var(--t3)', "--cardbg": 'var(--sig-card)'} as CSSProperties}>
        <div className="sig-row">
          <span className="art-blob"><svg className="sig-icon" viewBox="0 0 52 46" aria-label="Rising arrow"><path d="M3 40 C13 40, 15 12, 27 12 S37 26, 49 6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /><path d="M40 4h10v10" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          <div>
            <span className="sig-lab">Sales reluctance</span>
            <p className="sig-q">“I'll start selling next week. I've been saying that <span className="u-line">since March.</span>”</p>
          </div>
        </div>
        <div className="sig-panel">
          <div className="sig-sig">You know selling is essential, but something inside you is holding it back.</div>
        </div>
      </div>

      <div className="sig reveal" style={{"--sc": 'var(--s4)', "--sl": 'var(--s4)', "--tint": 'var(--t4)', "--cardbg": 'var(--sig-card)'} as CSSProperties}>
        <div className="sig-row">
          <span className="art-blob"><svg className="sig-icon" viewBox="0 0 52 46" aria-label="Overlapping circles"><circle cx="19" cy="23" r="14" strokeWidth="2.2" /><circle cx="33" cy="23" r="14" strokeWidth="2.2" /><path d="M26 10a14 14 0 000 26 14 14 0 000-26z" fill="currentColor" fillOpacity=".28" stroke="none" /></svg></span>
          <div>
            <span className="sig-lab">Co-founder misalignment</span>
            <p className="sig-q">“We split it before either of us knew what we'd actually do. Now I'm not sure <span className="u-line">I trust him.</span>”</p>
          </div>
        </div>
        <div className="sig-panel">
          <div className="sig-sig">Misalignment now will become resentment, conflict, and drag on everything.</div>
        </div>
      </div>

      <div className="sig reveal" style={{"--sc": 'var(--s5)', "--sl": 'var(--s5)', "--tint": 'var(--t2)', "--cardbg": 'var(--sig-card)'} as CSSProperties}>
        <div className="sig-row">
          <span className="art-blob"><svg className="sig-icon" viewBox="0 0 52 46" aria-label="Peak and fall"><path d="M2 42 L15 22 L23 30 L36 6 L50 42z" strokeWidth="2.2" strokeLinejoin="round" fill="currentColor" fillOpacity=".16" /></svg></span>
          <div>
            <span className="sig-lab">Bad business model</span>
            <p className="sig-q">“I ran the real numbers. It looked like I was spending on <span className="u-line">hope.</span>”</p>
          </div>
        </div>
        <div className="sig-panel">
          <div className="sig-sig">The unit economics don't work. No amount of hustle will fix the math.</div>
        </div>
      </div>

      <div className="hardq reveal" style={{"--sc": '#fff', "--sl": '#fff'} as CSSProperties}>
        <span className="ghost">”</span>
        <div className="sig-row">
          <span className="sig-lab">The hardest question</span>
        </div>
        <p className="sig-q">“What if I'm <i>just not startup material?</i>”</p>
        <div className="hq-ans">
          <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 5l15 5.5v9c0 9.5-6.5 16-15 18.5-8.5-2.5-15-9-15-18.5v-9z" /><path d="M16 22l4 4 8-8" /></svg>
          <p>What you're missing is a system for seeing what is actually happening.</p>
        </div>
        <a className="btn btn-black" href="#book">Run the Founder Diagnostic
              <svg className="arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
      </div>

    </div>
  </div>
</section>
  );
}
