import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import "./CartList.css";
import { ProductsContext } from "../../Contexts/ProductsContext";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function CartList() {
  const navigate = useNavigate();

  const { getProductsInCart } = useContext(ProductsContext);

  const cartProducts = getProductsInCart();

  const total = getProductsInCart().reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );

  return (
    <>
      {cartProducts.length > 0 ? (
        <div className="CartList">
          <ol>
            {cartProducts.map(product => (
              <CartItem key={product.id} product={product} />
            ))}
          </ol>
          <div className="total">
            <span>
              Total Amount: <strong>${total.toFixed(2)}</strong>
            </span>
            <Button onBtnClick={() => navigate("/checkout")}>
              Go to checkout
            </Button>
          </div>
        </div>
      ) : (
        <h3 className="CartList-heading">
          No products in cart... don't be so stingy
        </h3>
      )}
    </>
  );
}

export default CartList;
