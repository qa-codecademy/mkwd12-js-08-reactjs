import { useContext } from "react";
import { Product } from "../../models/product.model";
import Button from "../Button/Button";
import "./QuantityPanel.css";
import { ProductsContext } from "../../Contexts/ProductsContext";

interface QuantityPanelProps {
  product: Product;
}

function QuantityPanel({ product }: QuantityPanelProps) {
  const { addProductQuantity, removeProductQuantity } =
    useContext(ProductsContext);

  return (
    <div className="QuantityPanel">
      <Button
        disabled={product.quantity === 1}
        onBtnClick={() => {
          removeProductQuantity(product);
        }}
      >
        <i className="fa-solid fa-minus"></i>
      </Button>
      <div className="display">{product.quantity}</div>
      <Button
        onBtnClick={() => {
          addProductQuantity(product);
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </Button>
    </div>
  );
}

export default QuantityPanel;
