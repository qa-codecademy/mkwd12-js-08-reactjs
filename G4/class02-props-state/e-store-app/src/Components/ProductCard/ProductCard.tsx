import { Product } from "../../models/product.model";
import classes from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  console.log(product);

  return (
    <div
      className={`${classes.ProductCard} ${
        product.stock <= 0 ? classes["out-of-stock"] : ""
      }`}
    >
      <div className={classes.heading}>{product.title}</div>
      <p>{product.description}</p>
      <strong>
        Price: ${product.price} | Stock: {product.stock}
      </strong>
    </div>
  );
}

export default ProductCard;
