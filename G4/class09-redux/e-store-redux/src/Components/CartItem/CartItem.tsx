import { Product } from "../../models/product.model";
import Button from "../Button/Button";
import "./CartItem.css";
import { Link } from "react-router-dom";
import QuantityPanel from "../QuantityPanel/QuantityPanel";
import { useAppDispatch } from "../../utils/hooks";
import { removeFromCart } from "../../state/slices/products.slice";
import { toast } from "react-toastify";

interface CartItemProps {
  product: Product;
}

function CartItem({ product }: CartItemProps) {
  const dispatch = useAppDispatch();

  return (
    <li className="CartItem">
      <Link to={`/products/${product.id}`}>
        <span>{product.title}</span>
      </Link>

      <span>
        ${(product.price * product.quantity).toFixed(2)}
        <QuantityPanel product={product} />
        <Button
          onBtnClick={() => {
            toast.info("Product removed successfully!");
            dispatch(removeFromCart(product));
          }}
          style={{ marginLeft: "20px" }}
        >
          <i className="fa-solid fa-x"></i>
        </Button>
      </span>
    </li>
  );
}

export default CartItem;
