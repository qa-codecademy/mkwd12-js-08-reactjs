import { OrderDetails } from 'src/orders/entities/order-details.entity';
import { Order } from 'src/orders/entities/order.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  // Primary generated column is the main column of the table and this will create ids in ascending order for every new row starting from 1
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  stock: number;

  @Column('numeric')
  price: number;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  category: string;

  @OneToMany(() => OrderDetails, (orderDetails) => orderDetails.productId)
  orderDetailsArr: OrderDetails[];
}
