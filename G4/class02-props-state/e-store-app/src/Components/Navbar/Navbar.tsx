import { NavLink } from "../../models/core.model";
import "./Navbar.css";

interface NavbarProps {
  linkData: NavLink[];
}

function Navbar({ linkData }: NavbarProps) {
  return (
    <nav className="Navbar">
      <ul>
        {linkData.map((link, i) => (
          <li key={i}>
            <a href={link.path}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
