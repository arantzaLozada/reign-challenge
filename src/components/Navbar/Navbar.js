import { NavLink } from 'react-router-dom';

import './navbar.css';

export function Navbar() {
  return (
    <>
      <nav className="container navbar">
        <ul className="navbar-ul">
          <li className="navbar-li">
            <NavLink
              className={({ isActive }) => (isActive ? 'link-active' : 'link')}
              to="/"
            >
              All
            </NavLink>
          </li>
          <li className="navbar-li">
            <NavLink
              className={({ isActive }) => (isActive ? 'link-active' : 'link')}
              to="/favorites"
            >
              My faves
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
