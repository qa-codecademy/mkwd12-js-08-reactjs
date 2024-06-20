import { Link } from "react-router-dom";
import "./ProductCard.css";
import Button from "../Button/Button";
import { Product } from "../../models/product.model";
import { useContext } from "react";
import { ProductsContext } from "../../Contexts/ProductsContext";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useContext(ProductsContext);

  return (
    <div className="ProductCard">
      <Link to={`/products/${product.id}`}>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} />
      </Link>
      <div className="card-details">
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
  );
}

export default ProductCard;
