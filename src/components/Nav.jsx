import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();
  const onHome = location.pathname === '/';

  return (
    <nav className="nav" aria-label="Primary">
      <Link to="/" className="nav__brand">
        <span>◆</span> Seth&nbsp;Chan
      </Link>

      <div className="nav__menu">
        <NavLink to={onHome ? '#works' : '/#works'} end>
          Gallery
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
          About
        </NavLink>
        <NavLink to={onHome ? '#process' : '/#process'}>Process</NavLink>
      </div>

      <div className="nav__right">
        <span className="nav__dot" aria-hidden="true" />
        <span className="nav__status">Open for 2026</span>
        <button className="nav__menu-toggle" aria-label="Open menu" type="button">
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
