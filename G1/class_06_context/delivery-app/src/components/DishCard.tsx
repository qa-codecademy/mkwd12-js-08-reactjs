import { useContext } from "react";
import calculateDiscountedPrice from "../common/helpers/calculate-discounted-price.helper";
import { Dish } from "../common/types/dish.interface";
import { DishContext } from "../context/dish.context";

type DishCardProps = {
  dish: Dish;
};

export default function DishCard({ dish }: DishCardProps) {
  const { handleAddToCart } = useContext(DishContext);
  return (
    <div key={dish.id} className="border p-4 rounded shadow">
      <img
        src={dish.image}
        alt={dish.name}
        className="w-full h-40 object-cover mb-2"
      />
      <h3 className="text-lg font-bold">{dish.name}</h3>
      <p className="text-gray-600">{dish.description}</p>
      <div className="flex justify-between items-center mt-2">
        {dish.discountPercentage > 0 ? (
          <div>
            <span className="text-red-500 line-through mr-2">
              ${dish.price}
            </span>
            <span className="text-green-600 font-bold">
              $
              {calculateDiscountedPrice(
                dish.price,
                dish.discountPercentage
              ).toFixed(2)}
            </span>
          </div>
        ) : (
          <span className="font-bold">${dish.price}</span>
        )}

        <button
          className="bg-blue-500 text-white px-2 py-1 rounded"
          onClick={() => handleAddToCart(dish)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
