import { Product } from "../../models/product.model";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

function ProductCard({ product, onSelectProduct }: ProductCardProps) {
  return (
    <div className="ProductCard" onClick={() => onSelectProduct(product)}>
      <div className="heading">{product.title}</div>
      <div className="card-info">
        <strong>{product.rating.rate}/⭐</strong>
        <strong>{product.rating.count}👤</strong>
        <strong className="price">${product.price}</strong>
      </div>
    </div>
  );
}

export default ProductCard;
