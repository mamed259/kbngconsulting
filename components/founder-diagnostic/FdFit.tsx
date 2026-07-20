
export function FdFit() {
  return (
<section id="fit" style={{background: 'var(--paper-2)'}}>
  <div className="wrap">
    <div className="head reveal">
      <h2>The adversarial diagnostic is not for everyone.</h2>
      <p className="lede">Only for founders who want the truth, and who are serious about their business.</p>
    </div>
    <div className="fit">
      <div className="fitcard yes reveal">
        <h3><span className="flag" style={{width: '13px', height: '13px'}}></span>Eligible if</h3>
        <li><span className="m">+</span>You have a product, MVP or beyond. Pre-MVP works too, if you have a bulletproof roadmap for a genuinely technical product.</li>
        <li><span className="m">+</span>You have users, or are actively acquiring them.</li>
        <li><span className="m">+</span>You're open to uncomfortable truths.</li>
        <li><span className="m">+</span>You want clarity and you are serious about your business.</li>
      </div>
      <div className="fitcard no reveal">
        <h3>Not eligible if</h3>
        <li><span className="m">−</span>You want motivation or coaching.</li>
        <li><span className="m">−</span>You want validation or reassurance.</li>
        <li><span className="m">−</span>You have a fragile ego.</li>
        <li><span className="m">−</span>You want someone to do the work for you.</li>
      </div>
    </div>
  </div>
</section>
  );
}
