import { NavLink } from "react-router-dom";

import "./Header.css";

export const Header = () => {
  return (
    <header className="heading">
      <h2>LOGO</h2>
      <nav>
        <ul className="navLinks">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>

          <NavLink to="/trips">
            <li>Trips</li>
          </NavLink>

          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
