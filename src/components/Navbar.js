import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/favorites">My faves</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
