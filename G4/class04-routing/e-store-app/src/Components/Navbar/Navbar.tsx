import { NavLink } from "react-router-dom";
import { LinkData } from "../../models/core.model";
import "./Navbar.css";

interface NavbarProps {
  linkDataArr: LinkData[];
}

function Navbar({ linkDataArr }: NavbarProps) {
  return (
    <nav className="Navbar">
      <ul>
        {linkDataArr.map((link, i) => (
          <li key={i}>
            <NavLink end={true} to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
