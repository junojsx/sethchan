export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__brand-name">◆ Seth Chan</span>
          <span className="footer__brand-copy">
            © 2026 Seth Chan · All rights reserved
          </span>
        </div>

        <nav className="footer__nav">
          <a href="mailto:studio@sethchan.work">Instagram</a>
          <a href="mailto:studio@sethchan.work">Cargo</a>
          <a href="mailto:studio@sethchan.work">Read.cv</a>
        </nav>

        <a href="#top" className="footer__top">
          Back to Top
          <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M6 10V2M2 6l4-4 4 4" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
