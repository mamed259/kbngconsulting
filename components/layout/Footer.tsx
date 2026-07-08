import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <a className="brand" href="#top" aria-label="Back to top">
            <svg
              className="brand-logo-svg"
              viewBox="0 0 482 34"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden
            >
              <use href="#svg347873607_7690" />
            </svg>
          </a>
          <small>Keep building and growing.</small>
          <Link className="founder-link" href="/founder-diagnostic">
            Building a startup? &rarr; the Founder Diagnostic &#8599;
          </Link>
        </div>
        <div className="foot-mark" aria-hidden>
          KBNG
        </div>
      </div>
    </footer>
  );
}
