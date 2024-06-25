import { NavLink, Link } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/logo.png";
import { LineLoader } from "../Loader/Loader";
import { useContext } from "react";
import { TripContext } from "../../context/trip.context";
import { AuthContext } from "../../context/auth.context";
import { isAuthenticated } from "../../utils/auth";

export const Header = () => {
  const context = useContext(TripContext);
  const authContext = useContext(AuthContext);

  const { isLoading } = context;

  return (
    <div
      style={{
        position: "relative",
      }}
    >
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

            {isAuthenticated && (
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
            )}

            {isAuthenticated && (
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
            )}

            {!isAuthenticated && (
              <NavLink
                to="/login"
                className={({ isActive }) => {
                  if (isActive) {
                    return "activeLink";
                  }
                  return "pendingLink";
                }}
              >
                <li>Login</li>
              </NavLink>
            )}

            {!isAuthenticated && (
              <NavLink
                to="/register"
                className={({ isActive }) => {
                  if (isActive) {
                    return "activeLink";
                  }
                  return "pendingLink";
                }}
              >
                <li>Register</li>
              </NavLink>
            )}

            {isAuthenticated && (
              <li onClick={async () => await authContext.logout()}>Logout</li>
            )}
          </ul>
        </nav>
      </header>

      {isLoading && <LineLoader />}
    </div>
  );
};
