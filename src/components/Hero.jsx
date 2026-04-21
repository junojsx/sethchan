import WaveBackground from './WaveBackground.jsx';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg">
        <WaveBackground />
      </div>

      <div className="hero__meta">
        <div>Folio 01 — Vol. III</div>
      </div>

      <div className="container hero__inner">
        <div className="hero__grid">
          <h1 className="hero__headline">
            <span className="line">Synthesizing</span>
            <span className="line">
              <span className="light">Light</span>
              <span className="amp">&amp;</span>
            </span>
            <span className="line">
              Digital <span className="form">Form</span>
              <span className="dot">.</span>
            </span>
          </h1>

          <aside className="hero__side">
            <p className="hero__copy">
              Seth Chan works at the intersection of architectural 3D rendering
              and emotional, almost-liminal digital abstraction — building
              quiet images that take their time.
            </p>
            <a href="#works" className="hero__cta">
              Scroll to Explore
            </a>
          </aside>
        </div>
      </div>

      <div className="hero__corner">
        <span className="hero__corner-bar" />
        <span>Est. 2019 · Brooklyn, NY</span>
      </div>
    </section>
  );
}
