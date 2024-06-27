import { Product } from "../../models/product.model";
import Button from "../Button/Button";
import "./QuantityPanel.css";
import { useAppDispatch } from "../../utils/hooks";
import {
  removeProductQuantity,
  addProductQuantity,
} from "../../state/slices/products.slice";

interface QuantityPanelProps {
  product: Product;
}

function QuantityPanel({ product }: QuantityPanelProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="QuantityPanel">
      <Button
        disabled={product.quantity === 1}
        onBtnClick={() => {
          dispatch(removeProductQuantity(product));
        }}
      >
        <i className="fa-solid fa-minus"></i>
      </Button>
      <div className="display">{product.quantity}</div>
      <Button
        onBtnClick={() => {
          dispatch(addProductQuantity(product));
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </Button>
    </div>
  );
}

export default QuantityPanel;
