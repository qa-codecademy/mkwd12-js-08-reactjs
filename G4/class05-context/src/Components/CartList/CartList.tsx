import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import "./CartList.css";
import { ProductsContext } from "../../Contexts/ProductsContext";

function CartList() {
  const { getProductsInCart } = useContext(ProductsContext);

  const cartProducts = getProductsInCart();

  return (
    <>
      {cartProducts.length > 0 ? (
        <ol className="CartList">
          {cartProducts.map(product => (
            <CartItem key={product.id} product={product} />
          ))}
        </ol>
      ) : (
        <h3 className="CartList-heading">
          No products in cart... don't be so stingy
        </h3>
      )}
    </>
  );
}

export default CartList;
