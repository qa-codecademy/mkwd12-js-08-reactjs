import { useDispatch } from 'react-redux';
import calculateDiscountedPrice from '../common/helpers/calculate-discounted-price.helper';
import calculatePricePerItem from '../common/helpers/calculate-price-per-item.helper';
import { CartItem } from '../common/types/cart-item.interface';
import { decrementQuantity, incrementQuantity } from '../reducers/cart.reducer';

type CartItemContainerProps = {
	item: CartItem;
};

export default function CartItemContainer({ item }: CartItemContainerProps) {
	const dispatch = useDispatch();

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
					onClick={() => dispatch(decrementQuantity(item.dish.id))}>
					{' '}
					-{' '}
				</button>
				<span>{item.quantity}</span>
				<button
					className='bg-green-500 text-white px-2 rounded'
					onClick={() => dispatch(incrementQuantity(item.dish.id))}>
					{' '}
					+{' '}
				</button>
			</div>
		</div>
	);
}
