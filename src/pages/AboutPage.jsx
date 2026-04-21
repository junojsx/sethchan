import Portrait from '../components/Portrait.jsx';
import EphemeralTV from '../components/EphemeralTV.jsx';

const recognition = [
  { year: '2025', title: 'Prism Gallery Solo Exhibition', location: 'London, UK' },
  { year: '2024', title: 'Vanguard Digital Media Award', location: 'International' },
  { year: '2023', title: 'Obsidian Collective Group Show', location: 'Berlin, DE' },
  { year: '2022', title: 'MoMA Rising Artist Residency', location: 'New York, US' },
];

export default function AboutPage() {
  return (
    <>
      <section className="about-hero" id="top">
        <div className="container about-hero__inner">
          <div className="about-hero__portrait reveal">
            <div className="about-hero__frame">
              <Portrait />
            </div>
            <div className="about-hero__portrait-meta">
              <span>◆</span>
              <span>Studio Portrait — 2025</span>
            </div>
          </div>

          <div className="about-hero__body">
            <div className="eyebrow about-hero__eyebrow">
              <span className="dot-peach" />
              About the Artist
            </div>

            <h1 className="about-hero__title reveal">
              <span className="line">The</span>
              <span className="line">Visionary<span className="dot-peach-inline">.</span></span>
            </h1>

            <p className="about-hero__bio reveal">
              Seth Chan is a multimedia artist whose work explores the
              intersection of digital decay and organic permanence. Based in
              a sun-drenched studio in Brooklyn, he manipulates light and
              texture to challenge the boundaries of perception — asking what
              remains when the pixel is stripped away.
            </p>

            <blockquote className="about-hero__quote reveal">
              <p>
                “I believe the most profound truths are found in the spaces
                between — the silence that informs a visual explosion.”
              </p>
              <footer>— Seth Chan, Aperture Interview, 2024</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="philosophy container reveal" id="philosophy">
        <div className="philosophy__card">
          <div className="philosophy__copy">
            <div className="eyebrow">
              <span className="dot-peach" /> Creative Philosophy
            </div>

            <h2 className="philosophy__title">
              Capturing the <em>Ephemeral</em>
            </h2>

            <p>
              His process is one of subtraction. By removing the unnecessary,
              Chan uncovers the raw architecture of his subjects — whether
              they be physical sculptures or digital landscapes. Every piece
              is a meditation on time's relentless passage, a record of a
              moment that has already begun to dissolve.
            </p>
          </div>

          <div className="philosophy__visual">
            <div className="philosophy__frame">
              <EphemeralTV />
            </div>
            <div className="philosophy__caption">
              <span>Digital Alchemy &amp; Physical Form</span>
              <span>01 / 01</span>
            </div>
          </div>
        </div>
      </section>

      <section className="recognition container reveal" id="recognition">
        <header className="recognition__head">
          <h2 className="recognition__title">Selected Recognition</h2>
          <p className="recognition__sub">
            A history of showcasing work in venues that push the envelope of
            contemporary media arts.
          </p>
        </header>

        <ul className="recognition__list stagger reveal">
          {recognition.map((r, i) => (
            <li key={r.title} className="recognition__row">
              <span className="recognition__year">{r.year}</span>
              <span className="recognition__name">{r.title}</span>
              <span className="recognition__loc">{r.location}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="contact container reveal" id="contact">
        <div className="contact__card">
          <div className="contact__intro">
            <h2 className="contact__title">
              Begin a<br />Conversation<span className="dot-peach-inline">.</span>
            </h2>
            <p className="contact__copy">
              For commissions, gallery inquiries, or collaborations, please
              reach out directly.
            </p>

            <ul className="contact__details">
              <li>
                <span className="dot-blue" />
                <a href="mailto:studio@sethchan.work">studio@sethchan.work</a>
              </li>
              <li>
                <span className="dot-blue" />
                Brooklyn, NY &nbsp;/&nbsp; Available Worldwide
              </li>
            </ul>
          </div>

          <form
            className="contact__form"
            onSubmit={(e) => {
              e.preventDefault();
              const f = e.currentTarget;
              f.reset();
              f.querySelector('.contact__success').hidden = false;
            }}
          >
            <label className="contact__field">
              <span>Your Name</span>
              <input type="text" name="name" required autoComplete="name" />
            </label>
            <label className="contact__field">
              <span>Email Address</span>
              <input type="email" name="email" required autoComplete="email" />
            </label>
            <label className="contact__field">
              <span>Your Message</span>
              <textarea name="message" rows="4" required />
            </label>
            <div className="contact__actions">
              <button type="submit" className="contact__submit">
                Send Inquiry
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M2 6h8M6 2l4 4-4 4" />
                </svg>
              </button>
              <span className="contact__success" hidden>
                ◆ Received — I'll reply within 48 hours.
              </span>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
