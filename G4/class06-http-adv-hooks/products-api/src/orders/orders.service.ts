import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dtos/create-order.dto';
import { OrderDetails } from './entities/order-details.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private ordersRepo: Repository<Order>,
    @InjectRepository(OrderDetails)
    private orderDetailsRepo: Repository<OrderDetails>,
    @InjectEntityManager() private entityManager: EntityManager,
  ) {}

  getAllOrders() {
    // loadRelationId returns all the foreign key column values, they are not returned by default
    return this.ordersRepo.find({ loadRelationIds: true });
  }

  async getOrderById(id: number) {
    const foundOrder = await this.ordersRepo.findOne({
      where: { id },
      relations: {
        orderDetailsArr: {
          product: true,
        },
      },
    });

    // const test = await this.orderDetailsRepo.find({ where: { orderId: id } });

    // console.log(test);

    if (!foundOrder) throw new NotFoundException('Order not found');

    return foundOrder;
  }

  async createOrder(orderData: CreateOrderDto) {
    return this.entityManager.transaction(async (tem: EntityManager) => {
      const createdOrder = await tem.withRepository(this.ordersRepo).save({
        amount: orderData.amount,
        address: orderData.address,
        date: orderData.date,
        fullName: orderData.fullName,
      });

      const createdDetails = await tem
        .withRepository(this.orderDetailsRepo)
        .save(
          orderData.products.map((productDetails) => ({
            orderId: createdOrder.id,
            productId: productDetails.productId,
            quantity: productDetails.quantity,
          })),
        );
    });
  }
}
