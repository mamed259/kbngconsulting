export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <a className="brand" href="#top" aria-label="Back to top">
            <span className="flag coral" />
            <span>KB</span>
            <b>&amp;</b>
            <span>G</span>
          </a>
          <small>
            Built for industrial operators. &copy; {new Date().getFullYear()} KB&amp;G.
          </small>
        </div>
        <div className="foot-mark" aria-hidden>
          KBNG
        </div>
      </div>
    </footer>
  );
}
