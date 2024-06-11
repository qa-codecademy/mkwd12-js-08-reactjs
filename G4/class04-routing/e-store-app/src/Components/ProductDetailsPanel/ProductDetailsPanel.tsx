import { Product } from "../../models/product.model";
import Button from "../Button/Button";
import "./ProductDetailsPanel.css";

interface ProductDetailsPanelProps {
  product: Product;
  addToCart: (selectedProduct: Product) => void;
}

function ProductDetailsPanel({ product, addToCart }: ProductDetailsPanelProps) {
  return (
    <div className="ProductDetailsPanel">
      <h3>{product.title}</h3>
      <div className="panel-content">
        <div>
          <img src={product.image} alt={product.title} />
        </div>
        <div className="panel-details">
          <p>{product.description}</p>
          <div className="panel-controls">
            <p>${product.price}</p>
            <Button
              text={product.inCart ? "ADDED" : "🛒"}
              disabled={product.inCart}
              onBtnClick={() => addToCart(product)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPanel;
