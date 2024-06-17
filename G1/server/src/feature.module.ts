import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from './entities/dish.entity';
import { DishController } from './controllers/dish.controller';
import { DishService } from './servicers/dish.service';
import { Order } from './entities/order.entity';
import { OrderController } from './controllers/order.controller';
import { OrderService } from './servicers/order.service';

@Module({
  imports: [TypeOrmModule.forFeature([Dish, Order])],
  controllers: [DishController, OrderController],
  providers: [DishService, OrderService],
  exports: [],
})
export class FeatureModule {}
