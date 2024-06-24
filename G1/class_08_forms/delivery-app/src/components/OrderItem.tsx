import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import { Order } from '../common/types/order.interface';
import { useContext } from 'react';
import { DishContext } from '../context/dish.context';

type OrderItemProps = { order: Order };

export default function OrderItem({ order }: OrderItemProps) {
	const { handleReorder } = useContext(DishContext);

	return (
		<div className='flex justify-between items-center border p-2 rounded border-black shadow-lg'>
			<span>{order.dishes.map(dish => dish.name).join(', ')}</span>
			<div className='flex gap-x-2 items-center'>
				<span>${order.totalPrice.toFixed(2)}</span>
				<DocumentDuplicateIcon
					onClick={() => handleReorder(order.items)}
					className='size-7 cursor-pointer'
				/>
			</div>
		</div>
	);
}
