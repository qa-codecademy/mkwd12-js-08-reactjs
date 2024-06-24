import { OrderStatusColor } from '../common/types/order-status-color.enum';
import { OrderStatus as OrderStatusEnum } from '../common/types/order-status.enum';

type OrderStatusProps = {
	status: OrderStatusEnum;
};

export default function OrderStatus({ status }: OrderStatusProps) {
	const orderBgColor = OrderStatusColor[status];

	return (
		<span className={`px-2 py-1 text-white rounded ${orderBgColor}`}>
			{status}
		</span>
	);
}
