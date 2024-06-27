import CartList from "../../Components/CartList/CartList";
import { Page } from "../../Layout/Page/Page";

function CartPage() {
  return (
    <Page title="Cart">
      {/* Using CartList like below will make it to be the children prop of Page */}
      <CartList />
    </Page>
    // <section className="page">
    //   <div className="page-heading">
    //     <h2>Cart</h2>
    //   </div>
    //   <div className="page-content">
    //     <CartList cartProducts={cartProducts} removeFromCart={removeFromCart} />
    //   </div>
    // </section>
  );
}

export default CartPage;
