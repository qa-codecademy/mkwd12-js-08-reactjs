import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Dish } from './dish.entity';
import { AddressDto } from '../dtos/address.dto';
import { OrderItemDto } from '../dtos/order-dish.dto';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => Dish, (dish) => dish.orders)
  @JoinTable({
    name: 'orders_dishes',
    joinColumn: {
      name: 'order_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'dish_id',
      referencedColumnName: 'id',
    },
  })
  dishes: Dish[];

  @Column('float')
  totalPrice: number;

  @Column('jsonb')
  items: OrderItemDto[];

  @Column('jsonb')
  address: AddressDto;
}
