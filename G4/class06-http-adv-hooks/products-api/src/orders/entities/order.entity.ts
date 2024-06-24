import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderDetails } from './order-details.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('numeric')
  amount: number;

  @Column()
  date: Date;

  @Column()
  fullName: string;

  @Column()
  phoneNumber: string;

  @Column()
  address: string;

  @OneToMany(() => OrderDetails, (orderDetails) => orderDetails.order)
  orderDetailsArr: OrderDetails[];
}
