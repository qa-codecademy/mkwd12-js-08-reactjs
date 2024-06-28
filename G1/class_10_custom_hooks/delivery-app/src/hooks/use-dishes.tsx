import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoading, setDishes } from '../reducers/dish.reducer';
import { RootState } from '../store/store';

export const useDishes = () => {
	const dishes = useSelector((state: RootState) => state.dishes.dishes);
	const isLoading = useSelector((state: RootState) => state.dishes.isLoading);
	const [searchTerm, setSearchTerm] = useState('');
	const [pageSize, setPageSize] = useState(6);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setIsLoading(true));
		axios
			.get(
				`http://localhost:3000/api/dishes?page=${page}&pageSize=${pageSize}&name=${searchTerm}`
			)
			.then(dishesResponse => {
				dispatch(setDishes(dishesResponse.data.payload));
				setTotal(dishesResponse.data.total);
			})
			.catch(error => console.error(error))
			.finally(() => dispatch(setIsLoading(false)));
	}, [dispatch, searchTerm, page, pageSize]);

	return {
		dishes,
		page,
		pageSize,
		isLoading,
		total,
		setPage,
		setPageSize,
		setSearchTerm,
	};
};
