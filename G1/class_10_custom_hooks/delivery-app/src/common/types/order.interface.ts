import { CheckOutAddressFormValues } from './check-out-address-form-values.interface';
import { Dish } from './dish.interface';

export interface OrderItem {
	dishId: string;
	quantity: number;
	price: number;
	discountPercentage: number;
}

export interface Order {
	items: OrderItem[];
	address: CheckOutAddressFormValues;
	dishes: Dish[];
	id: string;
	totalPrice: number;
	createdAt: string;
}
