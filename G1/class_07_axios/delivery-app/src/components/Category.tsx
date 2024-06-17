import { useParams } from "react-router-dom";
import { Dish } from "../common/types/dish.interface";
import DishCard from "./DishCard";
import { useContext } from "react";
import { DishContext } from "../context/dish.context";

export default function CategoryPage() {
  const { dishes } = useContext(DishContext);
  const { categoryName: category } = useParams();

  const filteredDishes: Dish[] = dishes.filter(
    (dish) => dish.category === category
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredDishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
}
