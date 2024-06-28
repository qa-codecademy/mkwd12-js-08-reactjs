import { Dish } from '../common/types/dish.interface';
import DishCard from './DishCard';

type TopDishesProps = {
	title: string;
	dishes: Dish[];
	handleAddToCart: (dish: Dish) => void;
};

export default function TopDishes({ title, dishes }: TopDishesProps) {
	return (
		<section>
			<h2 className='text-2xl font-bold my-4'>{title}</h2>
			<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
				{dishes.map(dish => (
					<DishCard key={dish.id} dish={dish} />
				))}
			</div>
		</section>
	);
}
