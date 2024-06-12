import { useEffect, useState } from 'react';
import Header from './components/Header';
import MainComponent from './components/MainContainer';
import { Category } from './common/types/category.enum';
import dishes from './data/dishes.json';
import CategoryPage from './components/Category';
import { Dish } from './common/types/dish.interface';
import Cart from './components/Cart';
import { CartItem } from './common/types/cart-item.interface';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';

export default function App() {
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	const [cartItemsCount, setCartItemsCount] = useState(0);

	const handleAddToCart = (dish: Dish) => {
		// check if dish is already in cart

		if (cartItems.some(cartItem => cartItem.dish.id === dish.id)) {
			handleQuantityChange(dish.id, 'increment');
			return;
		}

		// Dish doesn't exist in cart
		const cartItem = {
			dish,
			quantity: 1,
		} satisfies CartItem;
		setCartItems([...cartItems, cartItem]);
	};

	const handleQuantityChange = (
		dishId: number,
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

	useEffect(() => {
		setCartItemsCount(cartItems.reduce((sum, curr) => sum + curr.quantity, 0));
	}, [cartItems]);

	return (
		<>
			<Header cartItemsCount={cartItemsCount} />
			<Routes>
				<Route
					path='/'
					element={
						<MainComponent
							dishes={dishes as Dish[]}
							handleAddToCart={handleAddToCart}
						/>
					}
				/>
				<Route
					path='/cart'
					element={
						<Cart
							cartItems={cartItems}
							handleQuantityChange={handleQuantityChange}
						/>
					}
				/>
				<Route
					path={`/category/:categoryName`}
					element={
						<CategoryPage
							dishes={dishes as Dish[]}
							handleAddToCart={handleAddToCart}
						/>
					}
				/>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
}
