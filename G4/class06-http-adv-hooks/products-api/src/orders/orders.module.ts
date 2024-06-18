import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderDetails } from './entities/order-details.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderDetails])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
