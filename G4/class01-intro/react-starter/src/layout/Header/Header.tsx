import "./Header.css";

export interface NavbarLink {
  link: string;
  text: string;
}

interface HeaderProps {
  appTitle: string;
  navbarLinkData: NavbarLink[];
}

function Header({ appTitle, navbarLinkData }: HeaderProps) {
  return (
    <header className="Header">
      <h1>{appTitle}</h1>
      <nav>
        {navbarLinkData.map((link, i) => (
          <a key={i} href={link.link}>
            {link.text}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
