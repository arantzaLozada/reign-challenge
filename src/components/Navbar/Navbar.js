import { Link } from 'react-router-dom';

import './navbar.css';

export function Navbar() {
  return (
    <>
      <nav className="container navbar">
        <ul className="navbar-ul">
          <li className="navbar-li">
            <Link style={{ color: '#606060' }} to="/">
              All
            </Link>
          </li>
          <li className="navbar-li">
            <Link style={{ color: '#606060' }} to="/favorites">
              My faves
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
