import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import DishCard from './DishCard';
import { useEffect, useState } from 'react';
import { Dish } from '../common/types/dish.interface';
import axios from 'axios';
import { setDishes, setIsLoading } from '../reducers/dish.reducer';
import Loader from './Loader';

export default function Dishes() {
	const dishes = useSelector((state: RootState) => state.dishes.dishes);
	const isLoading = useSelector((state: RootState) => state.dishes.isLoading);
	const [searchTerm, setSearchTerm] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setIsLoading(true));
		axios
			.get(
				`http://localhost:3000/api/dishes?page=1&pageSize=50&name=${searchTerm}`
			)
			.then(dishesResponse => dispatch(setDishes(dishesResponse.data.payload)))
			.catch(error => console.error(error))
			.finally(() => dispatch(setIsLoading(false)));
	}, [searchTerm]);

	return (
		<div className='p-4'>
			<div className='flex justify-center mb-4'>
				<input
					type='search'
					name='search'
					id='search'
					placeholder='Search...'
					onChange={e => setSearchTerm(e.target.value)}
					className='w-80 px-3 py-2 bg-white border border-slate-500 rounded-md text-sm shadow-sm placeholder-slate-500'
				/>
			</div>
			{isLoading ? (
				<Loader />
			) : (
				<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
					{dishes.length ? (
						dishes.map(dish => <DishCard key={dish.id} dish={dish} />)
					) : (
						<p>No dishes found.</p>
					)}
				</div>
			)}
		</div>
	);
}
