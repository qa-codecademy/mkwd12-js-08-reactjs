import { Link } from "react-router-dom";
import "./ProductCard.css";
import Button from "../Button/Button";
import { Product } from "../../models/product.model";

interface ProductCardProps {
  product: Product;
  addToCart: (selectedProduct: Product) => void;
}

function ProductCard({ product, addToCart }: ProductCardProps) {
  return (
    <div className="ProductCard">
      <Link to={`/products/${product.id}`}>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} />
      </Link>
      <div className="card-details">
        <p>${product.price}</p>
        <Button
          text={product.inCart ? "ADDED" : "🛒"}
          onBtnClick={() => {
            addToCart(product);
          }}
          disabled={product.inCart}
        />
      </div>
    </div>
  );
}

export default ProductCard;
