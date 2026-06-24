import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  return (
    <header id="top">
      <div className="wrap">
        <div className="nav">
          <a className="brand" href="#top" aria-label="KB and G home">
            <span className="flag coral" />
            <span>KB</span>
            <b>&amp;</b>
            <span>G</span>
          </a>
          <a className="btn btn-solid nav-cta" href="#book">
            Let&apos;s talk
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
