import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { Dish } from "../common/types/dish.interface";
import dishesJson from "../data/dishes.json";
import { CartItem } from "../common/types/cart-item.interface";

type DishContextProviderType = {
  children: ReactNode | ReactNode[];
};

type DishContextType = {
  greeting: (name: string) => void;
  dishes: Dish[];
  popularDishes: Dish[];
  recentDishes: Dish[];
  handleAddToCart: (dish: Dish) => void;
  handleQuantityChange: (
    dishId: number,
    typeOfChange: "increment" | "decrement"
  ) => void;
  cartItems: CartItem[];
  cartItemCount: number;
  handleRemoveCartItems: () => void;
};

const defaultValues: DishContextType = {
  greeting: () => {},
  dishes: [],
  popularDishes: [],
  recentDishes: [],
  handleAddToCart: () => {},
  handleQuantityChange: () => {},
  cartItems: [],
  cartItemCount: 0,
  handleRemoveCartItems: () => {},
};

export const DishContext = createContext<DishContextType>(defaultValues);

export default function DishProvider({ children }: DishContextProviderType) {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem("cartItems") as string) ?? []
  );
  const [cartItemCount, setCartItemCount] = useState(0);
  const greeting = (name: string) => `hello ${name}`;

  useEffect(() => {
    setDishes(dishesJson as Dish[]);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setCartItemCount(cartItems.reduce((acc, cur) => acc + cur.quantity, 0));
  }, [cartItems]);

  const handleQuantityChange = (
    dishId: number,
    typeOfChange: "increment" | "decrement"
  ) => {
    const updatedCartItems = cartItems
      .map((cartItem) => {
        if (cartItem.dish.id === dishId) {
          return {
            ...cartItem,
            quantity:
              typeOfChange === "increment"
                ? cartItem.quantity + 1
                : cartItem.quantity - 1,
          };
        }

        return cartItem;
      })
      .filter((item) => item.quantity);

    setCartItems(updatedCartItems);
  };

  const handleAddToCart = (dish: Dish) => {
    if (cartItems.some((cartItem) => cartItem.dish.id === dish.id)) {
      handleQuantityChange(dish.id, "increment");
      return;
    }

    const cartItem = {
      dish,
      quantity: 1,
    } satisfies CartItem;
    setCartItems([...cartItems, cartItem]);
  };

  const popularDishes = useMemo(
    () => [...dishes].sort((a, b) => b.orders - a.orders).slice(0, 5),
    [dishes]
  );

  const recentDishes = useMemo(
    () =>
      [...dishes].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ),
    [dishes]
  );

  const handleRemoveCartItems = () =>
    localStorage.getItem("cartItems")?.length &&
    (localStorage.removeItem("cartItems"), setCartItems([]));

  return (
    <DishContext.Provider
      value={{
        greeting,
        dishes,
        popularDishes,
        recentDishes,
        handleAddToCart,
        handleQuantityChange,
        cartItems,
        cartItemCount,
        handleRemoveCartItems,
      }}
    >
      {children}
    </DishContext.Provider>
  );
}
