import { ReactNode, createContext, useEffect, useState } from 'react';
import { Dish } from '../common/types/dish.interface';
import { CartItem } from '../common/types/cart-item.interface';
import axios from 'axios';
import { OrderItem } from '../common/types/order.interface';

type DishContextProviderType = {
	children: ReactNode | ReactNode[];
};

type DishContextType = {
	dishes: Dish[];
	popularDishes: Dish[];
	recentDishes: Dish[];
	handleAddToCart: (dish: Dish) => void;
	handleQuantityChange: (
		dishId: string,
		typeOfChange: 'increment' | 'decrement'
	) => void;
	cartItems: CartItem[];
	cartItemCount: number;
	handleRemoveCartItems: () => void;
	isLoading: boolean;
	handleReorder: (orderItems: OrderItem[]) => void;
};

const defaultValues: DishContextType = {
	dishes: [],
	popularDishes: [],
	recentDishes: [],
	handleAddToCart: () => {},
	handleQuantityChange: () => {},
	cartItems: [],
	cartItemCount: 0,
	handleRemoveCartItems: () => {},
	isLoading: false,
	handleReorder: () => {},
};

export const DishContext = createContext<DishContextType>(defaultValues);

export default function DishProvider({ children }: DishContextProviderType) {
	const [dishes, setDishes] = useState<Dish[]>([]);
	const [recentDishes, setRecentDishes] = useState<Dish[]>([]);
	const [popularDishes, setPopularDishes] = useState<Dish[]>([]);
	const [cartItems, setCartItems] = useState<CartItem[]>(
		JSON.parse(localStorage.getItem('cartItems') as string) ?? []
	);
	const [cartItemCount, setCartItemCount] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		Promise.all([
			axios.get('http://localhost:3000/api/dishes?page=1&pageSize=50'),
			axios.get(
				'http://localhost:3000/api/dishes?sortBy=createdAt&sortDirection=DESC&page=1&pageSize=5'
			),
			axios.get(
				'http://localhost:3000/api/dishes?sortBy=orders&sortDirection=DESC&page=1&pageSize=5'
			),
		])
			.then(([dishesResponse, recentDishesResponse, popularDishesResponse]) => {
				setDishes(dishesResponse.data.payload);
				setRecentDishes(recentDishesResponse.data.payload);
				setPopularDishes(popularDishesResponse.data.payload);
			})
			.catch(error => console.error('Error while fetching dishes', { error }))
			.finally(() => setIsLoading(false));
	}, []);

	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
		setCartItemCount(cartItems.reduce((acc, cur) => acc + cur.quantity, 0));
	}, [cartItems]);

	const handleReorder = (orderItems: OrderItem[]) => {
		const newCartItems: CartItem[] = orderItems.map(orderItem => ({
			dish: dishes.find(dish => dish.id === orderItem.dishId) as Dish,
			quantity: orderItem.quantity,
		}));

		setCartItems([...cartItems, ...newCartItems]);
	};

	const handleQuantityChange = (
		dishId: string,
		typeOfChange: 'increment' | 'decrement'
	) => {
		const updatedCartItems = cartItems
			.map(cartItem => {
				if (cartItem.dish.id === dishId) {
					return {
						...cartItem,
						quantity:
							typeOfChange === 'increment'
								? cartItem.quantity + 1
								: cartItem.quantity - 1,
					};
				}

				return cartItem;
			})
			.filter(item => item.quantity);

		setCartItems(updatedCartItems);
	};

	const handleAddToCart = (dish: Dish) => {
		if (cartItems.some(cartItem => cartItem.dish.id === dish.id)) {
			handleQuantityChange(dish.id, 'increment');
			return;
		}

		const cartItem = {
			dish,
			quantity: 1,
		} satisfies CartItem;
		setCartItems([...cartItems, cartItem]);
	};

	const handleRemoveCartItems = () =>
		localStorage.getItem('cartItems')?.length &&
		(localStorage.removeItem('cartItems'), setCartItems([]));

	return (
		<DishContext.Provider
			value={{
				dishes,
				popularDishes,
				recentDishes,
				handleAddToCart,
				handleQuantityChange,
				cartItems,
				cartItemCount,
				handleRemoveCartItems,
				isLoading,
				handleReorder,
			}}>
			{children}
		</DishContext.Provider>
	);
}
