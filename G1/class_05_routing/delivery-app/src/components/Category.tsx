import { useParams } from 'react-router-dom';
import { Category } from '../common/types/category.enum';
import { Dish } from '../common/types/dish.interface';
import DishCard from './DishCard';

type CategoryPageProps = {
	dishes: Dish[];
	handleAddToCart: (dish: Dish) => void;
};

export default function CategoryPage({
	dishes,
	handleAddToCart,
}: CategoryPageProps) {
	const { categoryName: category } = useParams();

	const filteredDishes: Dish[] = dishes.filter(
		dish => dish.category === category
	);

	return (
		<div className='p-4'>
			<h2 className='text-2xl font-bold mb-4'>{category}</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
				{filteredDishes.map(dish => (
					<DishCard
						key={dish.id}
						dish={dish}
						handleAddToCart={handleAddToCart}
					/>
				))}
			</div>
		</div>
	);
}
