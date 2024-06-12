import { Dish } from '../common/types/dish.interface';

import TopDishes from './TopDishes';

type MainComponentProps = {
	dishes: Dish[];
	handleAddToCart: (dish: Dish) => void;
};

export default function MainComponent({
	dishes,
	handleAddToCart,
}: MainComponentProps) {
	const popularDishes = [...dishes]
		.sort((a, b) => b.orders - a.orders)
		.slice(0, 5) as Dish[];
	const recentDishes = [...dishes]
		.sort(
			(a, b) =>
				new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
		)
		.slice(0, 5) as Dish[];

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
