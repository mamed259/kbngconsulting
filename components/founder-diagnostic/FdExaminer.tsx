import Image from "next/image";

export function FdExaminer() {
  return (
<section id="examiner" style={{background: 'var(--paper-2)'}}>
  <div className="wrap exam">
    <div className="portrait reveal">
      <Image src="/images/founder-diagnostic/julia.png" alt="Julia, founder of Startup Witch" width={640} height={800} />
      </div>
    <div className="reveal">
      <h2>Why founders trust me.</h2>
      <p><b>I am Julia Georgi.</b> <a href="https://www.linkedin.com/in/juliagulin/" target="_blank" rel="noopener">LinkedIn</a>. I have been in your seat: I built four startups. One failed. One exited. Two are growing right now: <a href="https://kbngconsulting.com/georgia" target="_blank" rel="noopener">Georgia</a> and <a href="https://kbngconsulting.com/canary-waves" target="_blank" rel="noopener">Canary Waves</a>. That sits on top of 15 years inside complex B2B systems where wrong positioning costs millions. Which means I have seen both sides: raising money, hiring the wrong people, building features nobody bought, and discovering far too late that the real problem was never the product.</p>
      <p>Before that I trained inside Strategy&amp; at PwC and delivered over €15M in top-line growth for world-leading B2B companies. I sold €800K of services inside my own companies, at my own price. <b>I did not read about startups in a book in the late 2000s. I did it in real life. And I am still doing it now.</b></p>
      <div className="stats">
        <div className="stat"><b>4</b><span>startups built. One failed, one exited, two growing.</span></div>
        <div className="stat"><b>€800K</b><span>in services sold inside my own companies.</span></div>
        <div className="stat"><b>€15M</b><span>in top-line growth delivered for world-leading B2B companies.</span></div>
        <div className="stat"><b>Risk free</b><span>Fully refundable. Win-win relationships only.</span></div>
      </div>
    </div>
  </div>
</section>
  );
}
