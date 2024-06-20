import { useContext } from "react";
import { Product } from "../../models/product.model";
import Button from "../Button/Button";
import "./ProductDetailsPanel.css";
import { ProductsContext } from "../../Contexts/ProductsContext";

interface ProductDetailsPanelProps {
  product: Product;
}

function ProductDetailsPanel({ product }: ProductDetailsPanelProps) {
  const { addToCart } = useContext(ProductsContext);

  console.log(product);

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
              onBtnClick={() => {
                addToCart(product);
              }}
              disabled={product.inCart}
            >
              {product.inCart ? (
                "ADDED"
              ) : (
                <i className="fa-solid fa-cart-arrow-down"></i>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPanel;
