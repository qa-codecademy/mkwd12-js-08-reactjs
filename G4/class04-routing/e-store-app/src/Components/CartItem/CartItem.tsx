import { Product } from "../../models/product.model";
import Button from "../Button/Button";
import "./CartItem.css";

interface CartItemProps {
  product: Product;
  removeFromCart: (selectedProduct: Product) => void;
}

function CartItem({ product, removeFromCart }: CartItemProps) {
  return (
    <li className="CartItem">
      <strong>{product.title}</strong>
      <span>
        ${product.price}
        <Button
          text="❌"
          onBtnClick={() => {
            removeFromCart(product);
          }}
          style={{ marginLeft: "20px" }}
        />
      </span>
    </li>
  );
}

export default CartItem;
