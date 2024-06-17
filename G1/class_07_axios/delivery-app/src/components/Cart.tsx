import { useNavigate } from "react-router-dom";
import CartItemContainer from "./CartItemContainer";
import calculateTotalPrice from "../common/helpers/calculate-total-price.helper";
import { useContext } from "react";
import { DishContext } from "../context/dish.context";

export default function Cart() {
  const navigate = useNavigate();
  const { cartItems, handleQuantityChange, handleRemoveCartItems } =
    useContext(DishContext);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Cart</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartItemContainer
            key={item.dish.id}
            item={item}
            handleQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
      <div className="mt-2 text-right font-bold">
        Total: ${calculateTotalPrice(cartItems).toFixed(2)}
      </div>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
        disabled={!cartItems.length}
        onClick={() => navigate("/check-out-address")}
      >
        Make Order
      </button>
      <button
        className="bg-red-400 text-white px-4 py-2 rounded-lg ml-2"
        onClick={() => handleRemoveCartItems()}
      >
        Empty Cart
      </button>
    </div>
  );
}
