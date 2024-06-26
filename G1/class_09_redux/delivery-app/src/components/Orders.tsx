import { useEffect, useState } from 'react';
import { Order } from '../common/types/order.interface';
import axios from 'axios';
import Loader from './Loader';
import OrderItem from './OrderItem';
import { Link } from 'react-router-dom';

export default function Orders() {
	const [orders, setOrders] = useState<Order[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		fetchOrders();
	}, []);

	const fetchOrders = async (): Promise<void> => {
		setIsLoading(true);
		try {
			const ordersResponse = await axios.get(
				'http://localhost:3000/api/orders'
			);
			setOrders(ordersResponse.data);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className='p-4'>
			<h1 className='text-2xl font-bold mb-4'>Orders</h1>
			{orders.length ? (
				<div className='space-y-4'>
					{orders.map(order => (
						<OrderItem key={order.id} order={order} fetchOrders={fetchOrders} />
					))}
				</div>
			) : (
				<p>
					You don't have any orders. Click{' '}
					<Link className='text-blue-500 underline' to='/'>
						here
					</Link>{' '}
					to make your first order.
				</p>
			)}
		</div>
	);
}

// <pre>{JSON.stringify(orders, null, 2)}</pre>
