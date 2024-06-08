import Navbar from "../../Components/Navbar/Navbar";
import { NavLink } from "../../models/core.model";
import "./Header.css";

interface HeaderProps {
  title: string;
  linkData: NavLink[];
}

function Header({ title, linkData }: HeaderProps) {
  return (
    <header className="Header">
      <h1>{title}</h1>
      <Navbar linkData={linkData} />
    </header>
  );
}

export default Header;
