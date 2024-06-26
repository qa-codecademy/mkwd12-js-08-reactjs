import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Dish } from '../common/types/dish.interface';

type DishState = {
	dishes: Dish[];
	popularDishes: Dish[];
	recentDishes: Dish[];
	isLoading: boolean;
};

const initialState = {
	dishes: [],
	popularDishes: [],
	recentDishes: [],
	isLoading: false,
} satisfies DishState;

const dishReducer = createSlice({
	name: 'dishes',
	initialState,
	reducers: {
		setDishes(state: DishState, action: PayloadAction<Dish[]>) {
			state.dishes = action.payload;
		},
		setPopularDishes(state: DishState, action: PayloadAction<Dish[]>) {
			state.popularDishes = action.payload;
		},
		setRecentDishes(state: DishState, action: PayloadAction<Dish[]>) {
			state.recentDishes = action.payload;
		},
		setIsLoading(state: DishState, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		},
	},
});

export const { setDishes, setPopularDishes, setRecentDishes, setIsLoading } =
	dishReducer.actions;
export default dishReducer.reducer;
