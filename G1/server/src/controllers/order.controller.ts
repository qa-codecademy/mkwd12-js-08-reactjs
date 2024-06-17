import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrderCreateDto } from '../dtos/order-create.dto';
import { Order } from '../entities/order.entity';
import { OrderService } from '../servicers/order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async getOrders(): Promise<Order[]> {
    return this.orderService.getOrders();
  }

  @Post()
  async createOrder(@Body() order: OrderCreateDto): Promise<Order> {
    return this.orderService.makeOrder(order);
  }

  @Delete(':id')
  async cancelOrder(@Param('id') id: string): Promise<void> {
    return this.orderService.cancelOrder(id);
  }
}
