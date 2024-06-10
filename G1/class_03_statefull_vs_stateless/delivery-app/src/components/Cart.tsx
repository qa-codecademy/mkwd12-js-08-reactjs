import { CartItem } from '../common/types/cart-item.interface';

type CartProps = {
	cartItems: CartItem[];
};

export default function Cart({ cartItems }: CartProps) {
	return (
		<div className='p-4'>
			<h2 className='text-2xl font-bold mb-4'>My Cart</h2>
			<div className='space-y-4'>
				{cartItems.map(item => (
					<div key={item.dish.id}>
						<span>{item.dish.name}</span>
						<button> - </button>
						<span>{item.quantity}</span>
						<button> + </button>
					</div>
				))}
			</div>
		</div>
	);
}
