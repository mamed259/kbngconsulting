function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 29 26" aria-hidden="true">
      <path d="M4 7 L25 2 L25 17 L14.5 12.5 L4 22 Z" fill="#68FFCF" />
    </svg>
  );
}

export function FdFooter() {
  return (
    <footer className="fd-footer">
      <div className="wrap foot">
        <div className="foot-main">
          <a className="brand" href="#top">
            <BrandMark />
            STARTUP&nbsp;WITCH <span className="by">by KB&amp;G</span>
          </a>
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
