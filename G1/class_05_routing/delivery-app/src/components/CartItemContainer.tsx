import calculateDiscountedPrice from '../common/helpers/calculate-discounted-price.helper';
import calculatePricePerItem from '../common/helpers/calculate-price-per-item.helper';
import { CartItem } from '../common/types/cart-item.interface';

type CartItemContainerProps = {
	item: CartItem;
	handleQuantityChange: (
		dishId: number,
		typeOfChange: 'increment' | 'decrement'
	) => void;
};

export default function CartItemContainer({
	item,
	handleQuantityChange,
}: CartItemContainerProps) {
	return (
		<div className='flex justify-between items-center border p-2 rounded'>
			<span>{item.dish.name}</span>
			<span>
				$
				{calculatePricePerItem(
					calculateDiscountedPrice(
						item.dish.price,
						item.dish.discountPercentage
					),
					item.quantity
				).toFixed(2)}
				{}
			</span>
			<div className='flex items-center space-x-2'>
				<button
					className='bg-red-500 text-white px-2 rounded'
					onClick={() => handleQuantityChange(item.dish.id, 'decrement')}>
					{' '}
					-{' '}
				</button>
				<span>{item.quantity}</span>
				<button
					className='bg-green-500 text-white px-2 rounded'
					onClick={() => handleQuantityChange(item.dish.id, 'increment')}>
					{' '}
					+{' '}
				</button>
			</div>
		</div>
	);
}
