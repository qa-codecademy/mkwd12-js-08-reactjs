import { useNavigate } from 'react-router-dom';
import { CartItem } from '../common/types/cart-item.interface';
import CartItemContainer from './CartItemContainer';
import calculateTotalPrice from '../common/helpers/calculate-total-price.helper';

type CartProps = {
	cartItems: CartItem[];
	handleQuantityChange: (
		dishId: number,
		typeOfChange: 'increment' | 'decrement'
	) => void;
};

export default function Cart({ cartItems, handleQuantityChange }: CartProps) {
	const navigate = useNavigate();

	return (
		<div className='p-4'>
			<h2 className='text-2xl font-bold mb-4'>My Cart</h2>
			<div className='space-y-4'>
				{cartItems.map(item => (
					<CartItemContainer
						key={item.dish.id}
						item={item}
						handleQuantityChange={handleQuantityChange}
					/>
				))}
			</div>
			<div className='mt-2 text-right font-bold'>
				Total: ${calculateTotalPrice(cartItems).toFixed(2)}
			</div>
			<button
				className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg'
				disabled={!cartItems.length}
				onClick={() => navigate('/check-out-address')}>
				Make Order
			</button>
		</div>
	);
}
