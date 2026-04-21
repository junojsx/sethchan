import Hero from '../components/Hero.jsx';
import SelectedWorks from '../components/SelectedWorks.jsx';
import Methodology from '../components/Methodology.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="reveal">
        <SelectedWorks />
      </div>
      <div className="reveal">
        <Methodology />
      </div>
    </>
  );
}
