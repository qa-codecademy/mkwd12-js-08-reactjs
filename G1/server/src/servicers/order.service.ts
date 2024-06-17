import { In, Repository } from 'typeorm';
import { OrderCreateDto } from '../dtos/order-create.dto';
import { Order } from '../entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Dish } from '../entities/dish.entity';
import calculateTotalPricePerOrder from '../common/helpers/calculate-total-price-per-order';

export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(Dish)
    private readonly dishRepository: Repository<Dish>,
  ) {}

  getOrders(): Promise<Order[]> {
    return this.orderRepository.find({
      relations: ['dishes'],
    });
  }

  async makeOrder(order: OrderCreateDto): Promise<Order> {
    const dishes = await this.dishRepository.findBy({
      id: In(order.items.map((d) => d.dishId)),
    });

    return this.orderRepository.save({
      address: order.address,
      dishes,
      items: order.items,
      totalPrice: calculateTotalPricePerOrder(order.items),
    });
  }

  async cancelOrder(id: string): Promise<void> {
    await this.orderRepository.softDelete(id);
  }
}
