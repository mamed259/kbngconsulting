import Link from "next/link";

function BrandLogo() {
  return (
    <svg
      className="brand-logo-svg"
      viewBox="0 0 482 34"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <use href="#svg347873607_7690" />
    </svg>
  );
}

export function FdFooter() {
  return (
    <footer className="fd-footer">
      <div className="wrap foot">
        <div className="foot-main">
          <Link className="brand" href="/" aria-label="KB&G home">
            <BrandLogo />
          </Link>
          <div className="slogan">Stop building blind.</div>
          <nav className="foot-links" aria-label="Footer">
            <a href="#blindspot">The Blind Spot</a>
            <a href="#method">How I Work</a>
            <a href="#case">Case Study</a>
            <a href="#proof">Results</a>
            <a href="#faq">FAQ</a>
            <a href="#book">Book</a>
          </nav>
        </div>
        <div className="meta">
          Strategic founder intelligence.
          <span className="flag-row">
            <span className="flag mint" />
            <span className="flag yellow" />
            <span className="flag coral" />
          </span>
          <br />
          Global · English · Remote
          <br />
          &copy; KB&amp;G. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
