import { CartItem } from '../types/cart-item.interface';
import calculateDiscountedPrice from './calculate-discounted-price.helper';
import calculatePricePerItem from './calculate-price-per-item.helper';

export default function calculateTotalPrice(
	cartItems: CartItem[] = []
): number {
	return cartItems.reduce((acc, curr) => {
		return (
			acc +
			calculatePricePerItem(
				calculateDiscountedPrice(curr.dish.price, curr.dish.discountPercentage),
				curr.quantity
			)
		);
	}, 0);
}
