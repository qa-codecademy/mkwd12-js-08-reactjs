import { useEffect } from 'react';
import TopDishes from './TopDishes';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
	setPopularDishes,
	setRecentDishes,
	setDishes,
	setIsLoading,
} from '../reducers/dish.reducer';
import axios from 'axios';
import { RootState } from '../store/store';
import { Dish } from '../common/types/dish.interface';

export default function MainComponent() {
	const dispatch = useDispatch();
	const popularDishes: Dish[] = useSelector(
		(state: RootState) => state.dishes.popularDishes
	);
	const recentDishes: Dish[] = useSelector(
		(state: RootState) => state.dishes.recentDishes
	);
	const isLoading = useSelector((state: RootState) => state.dishes.isLoading);

	useEffect(() => {
		dispatch(setIsLoading(true));

		Promise.all([
			axios.get('http://localhost:3000/api/dishes?page=1&pageSize=50'),
			axios.get(
				'http://localhost:3000/api/dishes?sortBy=createdAt&sortDirection=DESC&page=1&pageSize=5'
			),
			axios.get(
				'http://localhost:3000/api/dishes?sortBy=orders&sortDirection=DESC&page=1&pageSize=5'
			),
		])
			.then(([dishesResponse, recentDishesResponse, popularDishesResponse]) => {
				dispatch(setDishes(dishesResponse.data.payload));
				dispatch(setRecentDishes(recentDishesResponse.data.payload));
				dispatch(setPopularDishes(popularDishesResponse.data.payload));
			})
			.catch(error => console.error('Error while fetching dishes', { error }))
			.finally(() => dispatch(setIsLoading(false)));
	}, [dispatch]);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className='p-4'>
			<TopDishes
				title='Top 5 Most Popular Dishes'
				dishes={popularDishes}
				handleAddToCart={() => {}}
			/>
			<TopDishes
				title='Top 5 Recently Added Dishes'
				dishes={recentDishes}
				handleAddToCart={() => {}}
			/>
		</div>
	);
}
