import { Dish } from '../common/types/dish.interface';
import DishCard from './DishCard';

type TopDishesProps = {
	title: string;
	dishes: Dish[];
};

export default function TopDishes({ title, dishes }: TopDishesProps) {
	return (
		<section>
			<h2 className='text-2xl font-bold mb-4'>{title}</h2>
			<div className='gap-4'>
				{dishes.map(dish => (
					<DishCard dish={dish} />
				))}
			</div>
		</section>
	);
}