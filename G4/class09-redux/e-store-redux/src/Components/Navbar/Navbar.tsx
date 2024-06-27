import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAppSelector } from "../../utils/hooks";
import { selectProductsInCart } from "../../state/selectors";

function Navbar() {
  const cartProducts = useAppSelector(selectProductsInCart);

  const cartCount = cartProducts.reduce(
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
