import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { ProductsContext } from "../../Contexts/ProductsContext";

function Navbar() {
  const { getProductsInCart } = useContext(ProductsContext);

  const cartCount = getProductsInCart().reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  return (
    <nav className="Navbar">
      <ul>
        <li>
          <NavLink to="/add-product">Add Product</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
            {cartCount > 0 && cartCount}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
