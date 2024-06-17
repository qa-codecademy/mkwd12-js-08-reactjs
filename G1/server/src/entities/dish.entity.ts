import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from '../common/types/categories.enum';
import { Order } from './order.entity';

@Entity()
export class Dish {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    description: 'The unique id of the dish',
    type: String,
    format: 'uuid',
    example: 'd1ee0ef8-ae1a-4e2a-bd0a-d4d0d9d8d7d6',
  })
  id: string;

  @Column()
  @ApiProperty({
    description: 'The name of the dish',
    type: String,
    example: 'Chicken Curry',
  })
  name: string;

  @Column()
  @ApiProperty({
    description: 'The description of the dish',
    type: String,
    example: 'Chicken curry is a popular dish in Indian cuisine.',
  })
  description: string;

  @Column('float')
  @ApiProperty({
    description: 'The price of the dish',
    type: Number,
    example: 10.99,
  })
  price: number;

  @Column()
  @ApiProperty({
    description: 'The image of the dish',
    type: String,
    example: '/images/chicken-curry.jpg',
  })
  image: string;

  @Column({ default: 0 })
  @ApiProperty({
    description: 'The discount percentage of the dish',
    type: Number,
    example: 5,
    default: 0,
  })
  discountPercentage: number;

  @Column({ enum: Category, enumName: 'Category' })
  @ApiProperty({
    description: 'The category of the dish',
    enum: Category,
    example: Category.Pizza,
  })
  category: Category;

  @ManyToMany(() => Order, (order) => order.dishes)
  orders: Order[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
