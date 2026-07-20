import Image from "next/image";

export function FdBlindspot() {
  return (
<section id="blindspot" style={{background: 'var(--paper-2)'}}>
  <div className="wrap blind-grid">
    <div className="reveal">
      <h2>Being right about one dimension can <span className="mark c">hide</span> all the others.</h2>
      <p className="lede">You&apos;re skilled. Smart. Competent. You know your industry and you know your core. Then the last nine months changed the game: building got cheap, attention got expensive, and the dimension that decides everything now is the one nobody ever trained you in. So your ICP becomes everyone. Your messaging becomes everything. And your pipeline becomes nothing.</p>
    </div>

    <div className="burden-card reveal">
      <Image
        className="funnel-art"
        src="/images/founder-diagnostic/funnel.jpg"
        alt="Two founders looking up at someone who has already reached the summit"
        width={800}
        height={1000}
      />
      <div className="bc-inner">
        <div>
          <div className="bc-n">15 founders <span className="mark y">this year.</span></div>
          <p className="bc-copy">Every single one had misread their use case. That one mistake produced all of this:</p>
        </div>
        <div className="bc-chips">
        <div className="chip2"><span className="ci"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" strokeLinejoin="round" /><path d="M9 4v14M15 6v14" /></svg></span><span className="cl">Broad roadmap</span></div>
        <div className="chip2"><span className="ci"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" strokeLinejoin="round" /><path d="M10 11v6M14 11v6" /></svg></span><span className="cl">Wasted effort</span></div>
        <div className="chip2"><span className="ci"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M8 16c1.2-1.6 6.8-1.6 8 0" strokeLinecap="round" /><circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" /><circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" /></svg></span><span className="cl">Hated sales</span></div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
