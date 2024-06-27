import { Product } from "../../models/product.model";
import Button from "../Button/Button";
import "./ProductDetailsPanel.css";
import { useAppDispatch } from "../../utils/hooks";
import { addToCart } from "../../state/slices/products.slice";
import { toast } from "react-toastify";

interface ProductDetailsPanelProps {
  product: Product;
}

function ProductDetailsPanel({ product }: ProductDetailsPanelProps) {
  const dispatch = useAppDispatch();

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
                toast.success("Product added successfully!");
                dispatch(addToCart(product));
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
