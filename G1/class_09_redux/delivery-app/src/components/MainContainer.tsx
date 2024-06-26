import { useContext } from 'react';

import TopDishes from './TopDishes';
import { DishContext } from '../context/dish.context';
import Loader from './Loader';

export default function MainComponent() {
	const { popularDishes, recentDishes, handleAddToCart, isLoading } =
		useContext(DishContext);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className='p-4'>
			<TopDishes
				title='Top 5 Most Popular Dishes'
				dishes={popularDishes}
				handleAddToCart={handleAddToCart}
			/>
			<TopDishes
				title='Top 5 Recently Added Dishes'
				dishes={recentDishes}
				handleAddToCart={handleAddToCart}
			/>
		</div>
	);
}
