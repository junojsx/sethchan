import { StairsArt, DiamondArt, WarmArt, PrismArt } from './Artworks.jsx';

const works = [
  {
    id: 'stairs',
    num: '01',
    title: 'Descent / Still',
    year: '2025',
    art: StairsArt,
    className: 'work--stairs',
  },
  {
    id: 'diamond',
    num: '02',
    title: 'Resonant Vessel',
    year: '2024',
    art: DiamondArt,
    className: 'work--diamond',
  },
  { id: 'gap', className: 'work--gap', spacer: true },
  {
    id: 'warm',
    num: '03',
    title: 'Golden Hour Study',
    year: '2024',
    art: WarmArt,
    className: 'work--warm',
  },
  {
    id: 'prism',
    num: '04',
    title: 'Refraction No. 7',
    year: '2025',
    art: PrismArt,
    className: 'work--prism',
  },
];

export default function SelectedWorks() {
  return (
    <section className="works container" id="works">
      <header className="works__head">
        <h2 className="works__title">Selected Works</h2>
        <div className="works__meta">
          <span>Vol. III — '24 / '26</span>
          <span>04 projects</span>
        </div>
      </header>

      <div className="works__grid">
        {works.map((w) => {
          if (w.spacer) return <div key={w.id} className={`work ${w.className}`} />;
          const Art = w.art;
          return (
            <a key={w.id} href="#" className={`work ${w.className}`}>
              <div className="work__art">
                <Art />
              </div>
              <span className="work__num">[ {w.num} ]</span>
              <div className="work__meta">
                <span className="work__title">{w.title}</span>
                <span className="work__year">{w.year}</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
