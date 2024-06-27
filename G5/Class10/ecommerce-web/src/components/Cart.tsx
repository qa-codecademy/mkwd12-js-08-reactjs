import { useSelector } from "react-redux";
import { RootState } from "../store";
export const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  console.log(cartItems);
  return (
    <div>
      <h2>Carts</h2>
    </div>
  );
};
