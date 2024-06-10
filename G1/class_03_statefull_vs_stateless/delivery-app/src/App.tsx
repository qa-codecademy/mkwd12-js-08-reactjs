import { useState } from 'react';
import Header from './components/Header';
import MainComponent from './components/MainContainer';
import { Category } from './common/types/category.enum';
import dishes from './data/dishes.json';
import CategoryPage from './components/Category';
import { Dish } from './common/types/dish.interface';

export default function App() {
	// null is homepage
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(
		null
	);

	return (
		<div>
			<Header selectCategory={setSelectedCategory} />
			{selectedCategory === null ? (
				<MainComponent dishes={dishes as Dish[]} />
			) : (
				<CategoryPage category={selectedCategory} dishes={dishes as Dish[]} />
			)}
		</div>
	);
}
