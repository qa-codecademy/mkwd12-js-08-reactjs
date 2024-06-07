import { Dish } from '../common/types/dish.interface';
import dishes from '../data/dishes.json';
import DishCard from './DishCard';

export default function MainComponent() {
	const popularDishes = [...dishes]
		.sort((a, b) => b.orders - a.orders)
		.slice(0, 5) as Dish[];
	const recentDishes = [...dishes]
		.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
		.slice(0, 5) as Dish[];

	return (
		<div className='p-4'>
			<section>
				<h2 className='text-2xl font-bold mb-4'>Top 5 Most Popular Dishes</h2>
				<div className='gap-4'>
					{popularDishes.map(dish => (
						<DishCard dish={dish} />
					))}
				</div>
			</section>
			<section>
				<h2 className='text-2xl font-bold mb-4'>Top 5 Recently Added Dishes</h2>
				<div className='gap-4'>
					{recentDishes.map(dish => (
						<DishCard dish={dish} />
					))}
				</div>
			</section>
		</div>
	);
}
