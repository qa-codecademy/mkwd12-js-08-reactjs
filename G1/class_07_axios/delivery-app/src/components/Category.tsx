import { useNavigate, useParams } from 'react-router-dom';
import { Dish } from '../common/types/dish.interface';
import DishCard from './DishCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loader';
import { Category } from '../common/types/category.enum';

export default function CategoryPage() {
	const [dishes, setDishes] = useState<Dish[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const { categoryName: category } = useParams();
	const navigate = useNavigate();

	const isValidCategory = Object.values(Category).includes(
		category as Category
	);

	useEffect(() => {
		if (!isValidCategory) {
			navigate('/not-found');
			return;
		}

		setIsLoading(true);
		axios
			.get(`http://localhost:3000/api/dishes?category=${category}`)
			.then(response => setDishes(response.data.payload))
			.catch(error =>
				console.error('Error while fetching dishes by category', { error })
			)
			.finally(() => setIsLoading(false));
	}, [category, isValidCategory, navigate]);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className='p-4'>
			<h2 className='text-2xl font-bold mb-4'>{category}</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
				{dishes.map(dish => (
					<DishCard key={dish.id} dish={dish} />
				))}
			</div>
		</div>
	);
}
