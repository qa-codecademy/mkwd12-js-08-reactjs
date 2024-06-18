import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class OrderDetails {
  @PrimaryColumn()
  productId: number;

  @PrimaryColumn()
  orderId: number;

  @Column({ nullable: true })
  quantity: number;

  @ManyToOne(() => Product)
  product: Product;

  @ManyToOne(() => Order)
  order: Order;
}
