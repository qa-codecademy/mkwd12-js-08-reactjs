import { useContext } from "react";
import { Product } from "../../models/product.model";
import Button from "../Button/Button";
import "./CartItem.css";
import { ProductsContext } from "../../Contexts/ProductsContext";

interface CartItemProps {
  product: Product;
}

function CartItem({ product }: CartItemProps) {
  const { removeFromCart } = useContext(ProductsContext);

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
