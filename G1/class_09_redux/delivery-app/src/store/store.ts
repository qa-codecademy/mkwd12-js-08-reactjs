import { configureStore } from '@reduxjs/toolkit';
import dishReducer from '../reducers/dish.reducer';
import cartReducer from '../reducers/cart.reducer';

const store = configureStore({
	reducer: {
		dishes: dishReducer,
		cart: cartReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
