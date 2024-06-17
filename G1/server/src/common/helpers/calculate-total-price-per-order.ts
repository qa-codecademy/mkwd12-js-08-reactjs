import { OrderItemDto } from '../../dtos/order-dish.dto';
import calculateDiscountedPrice from './calculate-discounted-price';

export default function calculateTotalPricePerOrder(
  items: OrderItemDto[],
): number {
  return items.reduce((total, item) => {
    return (
      total +
      calculateDiscountedPrice(item.price, item.discountPercentage) *
        item.quantity
    );
  }, 0);
}
