import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { LinkData } from "../../models/core.model";
import "./Header.css";

interface HeaderProps {
  title: string;
  linkDataArr: LinkData[];
}

function Header({ title, linkDataArr }: HeaderProps) {
  return (
    <header className="Header">
      <h1>
        <Link to="/products" style={{ textDecoration: "none", color: "black" }}>
          {title}
        </Link>
      </h1>
      <Navbar linkDataArr={linkDataArr} />
    </header>
  );
}

export default Header;
