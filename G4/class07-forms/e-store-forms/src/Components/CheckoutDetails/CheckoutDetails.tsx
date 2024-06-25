import { useContext } from "react";
import "./CheckoutDetails.css";
import { ProductsContext } from "../../Contexts/ProductsContext";
import Button from "../Button/Button";

interface CheckoutDetailsProps {
  onOrderSubmit: () => void;
}

function CheckoutDetails({ onOrderSubmit }: CheckoutDetailsProps) {
  const { getProductsInCart } = useContext(ProductsContext);

  const cartProducts = getProductsInCart();

  const total = cartProducts.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );

  return (
    <div className="CheckoutDetails">
      <ul className="checkout-list">
        {cartProducts.map((product, i) => (
          <li key={product.id}>
            <strong>{i + 1}.</strong> <span>{product.title}</span>
            <span className="item-quantity">
              ${product.price} x {product.quantity}
            </span>
            <span className="item-total">
              ${(product.price * product.quantity).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <div className="total">
        <div className="total-list">
          <div>
            Total: <strong>${total.toFixed(2)}</strong>
          </div>
          <div>
            Shipping: <strong>$49.99</strong>
          </div>
          <div>
            Total with shipping: <strong>${(total + 49.99).toFixed(2)}</strong>
          </div>
          <Button onBtnClick={() => onOrderSubmit()}>Submit Order</Button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutDetails;
