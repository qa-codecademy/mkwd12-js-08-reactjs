import { Dish } from './dish.interface';

export interface CartItem {
	dish: Dish;
	quantity: number;
}
