import { useState } from 'react';
import Header from './components/Header';
import MainComponent from './components/MainContainer';
import { Category } from './common/types/category.enum';
import dishes from './data/dishes.json';
import CategoryPage from './components/Category';
import { Dish } from './common/types/dish.interface';
import Cart from './components/Cart';
import { CartItem } from './common/types/cart-item.interface';

export default function App() {
	// null is homepage
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(
		null
	);
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	const handleAddToCart = (dish: Dish) => {
		const cartItem = {
			dish,
			quantity: 1,
		} satisfies CartItem;
		setCartItems([...cartItems, cartItem]);
	};

	const handleCartClick = () => {
		setShowCart(!showCart);
		setSelectedCategory(null);
	};

	const handleCategorySelect = (category: Category | null) => {
		setSelectedCategory(category);
		setShowCart(false);
	};

	return (
		<div>
			<Header
				selectCategory={handleCategorySelect}
				handleCartClick={handleCartClick}
			/>
			{/* Home page */}
			{!selectedCategory && !showCart && (
				<MainComponent
					dishes={dishes as Dish[]}
					handleAddToCart={handleAddToCart}
				/>
			)}

			{/* Category pages */}
			{selectedCategory && (
				<CategoryPage
					category={selectedCategory}
					dishes={dishes as Dish[]}
					handleAddToCart={handleAddToCart}
				/>
			)}

			{/* Cart */}
			{showCart && <Cart cartItems={cartItems} />}
		</div>
	);
}
