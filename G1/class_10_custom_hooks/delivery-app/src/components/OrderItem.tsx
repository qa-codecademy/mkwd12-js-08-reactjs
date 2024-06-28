import { DocumentDuplicateIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Order } from '../common/types/order.interface';
import OrderStatus from './OrderStatus';
import { OrderStatus as OrderStatusEnum } from '../common/types/order-status.enum';
import isLessThanMs from '../common/helpers/is-less-than-ms.helper';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { reorder } from '../reducers/cart.reducer';
import { useNavigate } from 'react-router-dom';

type OrderItemProps = { order: Order; fetchOrders: () => void };

export default function OrderItem({ order, fetchOrders }: OrderItemProps) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const getOrderStatus = (createdAt: string) => {
		if (isLessThanMs(createdAt, 120000)) {
			return <OrderStatus status={OrderStatusEnum.Preparing} />;
		} else if (isLessThanMs(createdAt, 300000)) {
			return <OrderStatus status={OrderStatusEnum.InProgress} />;
		} else if (isLessThanMs(createdAt, 600000)) {
			return <OrderStatus status={OrderStatusEnum.Delivering} />;
		} else {
			return <OrderStatus status={OrderStatusEnum.Delivered} />;
		}
	};

	const deleteOrder = async (id: string) => {
		try {
			await axios.delete(`http://localhost:3000/api/orders/${id}`);
			fetchOrders();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className='flex justify-between items-center border p-2 rounded border-black shadow-lg'>
			<span>{order.dishes.map(dish => dish.name).join(', ')}</span>
			<div className='flex gap-x-2 items-center'>
				{getOrderStatus(order.createdAt)}
				<span>${order.totalPrice.toFixed(2)}</span>
				<DocumentDuplicateIcon
					onClick={() => {
						dispatch(reorder(order));
						navigate('/cart');
					}}
					className='size-7 cursor-pointer'
				/>
				<button
					className={
						!isLessThanMs(order.createdAt, 600000)
							? 'cursor-not-allowed'
							: 'cursor-pointer'
					}
					disabled={!isLessThanMs(order.createdAt, 600000)}
					onClick={() => deleteOrder(order.id)}>
					<TrashIcon className='size-7' />
				</button>
			</div>
		</div>
	);
}
