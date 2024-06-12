import { CartItem } from '../common/types/cart-item.interface';
import CartItemContainer from './CartItemContainer';

type CartProps = {
	cartItems: CartItem[];
	handleQuantityChange: (
		dishId: number,
		typeOfChange: 'increment' | 'decrement'
	) => void;
};

export default function Cart({ cartItems, handleQuantityChange }: CartProps) {
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
		</div>
	);
}
