import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartItem } from '../common/types/cart-item.interface';
import { Dish } from '../common/types/dish.interface';
import { Order, OrderItem } from '../common/types/order.interface';

type CartState = {
	items: CartItem[];
	isLoading: boolean;
};

const initialState = {
	items: [],
	isLoading: false,
} satisfies CartState;

const cartReducer = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setIsLoading(state: CartState, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		},
		addToCart(state: CartState, action: PayloadAction<Dish>) {
			const existingCartItemIndex = state.items.findIndex(
				item => item.dish.id === action.payload.id
			);

			if (existingCartItemIndex > -1) {
				const updatedItems = state.items.map(item => {
					if (item.dish.id === action.payload.id) {
						item.quantity += 1;
					}
					return item;
				});

				state.items = updatedItems;
			} else {
				state.items.push({ dish: action.payload, quantity: 1 });
			}
		},
		incrementQuantity(state: CartState, action: PayloadAction<string>) {
			const updatedItems = state.items.map(item => {
				if (item.dish.id === action.payload) {
					item.quantity += 1;
				}
				return item;
			});

			state.items = updatedItems;
		},
		decrementQuantity(state: CartState, action: PayloadAction<string>) {
			const updatedItems = state.items
				.map(item => {
					if (item.dish.id === action.payload) {
						item.quantity -= 1;
					}
					return item;
				})
				.filter(item => item.quantity >= 1);

			state.items = updatedItems;
		},
		reorder(state: CartState, action: PayloadAction<Order>) {
			const newCartItems: CartItem[] = action.payload.items.map(item => ({
				dish: action.payload.dishes.find(
					dish => dish.id === item.dishId
				) as Dish,
				quantity: item.quantity,
			}));

			state.items.push(...newCartItems);
		},
	},
});

export const {
	addToCart,
	setIsLoading,
	incrementQuantity,
	decrementQuantity,
	reorder,
} = cartReducer.actions;
export default cartReducer.reducer;
