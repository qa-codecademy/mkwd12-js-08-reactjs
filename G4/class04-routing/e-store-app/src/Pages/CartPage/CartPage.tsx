import CartList from "../../Components/CartList/CartList";
import { Product } from "../../models/product.model";

interface CartPageProps {
  cartProducts: Product[];
  removeFromCart: (selectedProduct: Product) => void;
}

function CartPage({ cartProducts, removeFromCart }: CartPageProps) {
  return (
    <section className="page">
      <div className="page-heading">
        <h2>Cart</h2>
      </div>
      <div className="page-content">
        <CartList cartProducts={cartProducts} removeFromCart={removeFromCart} />
      </div>
    </section>
  );
}

export default CartPage;
