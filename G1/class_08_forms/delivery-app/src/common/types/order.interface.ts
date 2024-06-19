import { CheckOutAddressFormValues } from './check-out-address-form-values.interface';

export interface OrderItem {
	dishId: string;
	quantity: number;
	price: number;
	discountPercentage: number;
}

export interface Order {
	items: OrderItem[];
	address: CheckOutAddressFormValues;
}
