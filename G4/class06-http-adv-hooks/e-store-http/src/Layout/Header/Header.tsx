import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./Header.css";

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <header className="Header">
      <h1>
        <Link to="/products" style={{ textDecoration: "none", color: "black" }}>
          {title}
        </Link>
      </h1>
      <Navbar />
    </header>
  );
}

export default Header;
