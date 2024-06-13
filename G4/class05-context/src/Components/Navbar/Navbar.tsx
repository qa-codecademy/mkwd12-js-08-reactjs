import { NavLink } from "react-router-dom";
import { LinkData } from "../../models/core.model";
import "./Navbar.css";
import { useContext } from "react";
import { ProductsContext } from "../../Contexts/ProductsContext";

function Navbar() {
  const linkDataArr: LinkData[] = [
    {
      path: "/products",
      text: "Products",
    },
    {
      path: "/cart",
      text: "Cart",
    },
  ];

  const { getProductsInCart } = useContext(ProductsContext);

  const cartCount = getProductsInCart().length;

  return (
    <nav className="Navbar">
      <ul>
        {linkDataArr.map((link, i) => (
          <li key={i}>
            <NavLink end={true} to={link.path}>
              {link.text} {link.path === "/cart" && cartCount > 0 && cartCount}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
