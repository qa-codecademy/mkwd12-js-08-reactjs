import { NavLink, Link } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <header className="heading">
      <div>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>

      <nav>
        <ul className="navLinks">
          <NavLink
            to="/"
            className={({ isActive }) => {
              if (isActive) {
                return "activeLink";
              }
              return "pendingLink";
            }}
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            to="/trips"
            className={({ isActive }) => {
              if (isActive) {
                return "activeLink";
              }
              return "pendingLink";
            }}
          >
            <li>Trips</li>
          </NavLink>

          <NavLink
            to="/add-trip"
            className={({ isActive }) => {
              if (isActive) {
                return "activeLink";
              }
              return "pendingLink";
            }}
          >
            <li>Add Trip</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
