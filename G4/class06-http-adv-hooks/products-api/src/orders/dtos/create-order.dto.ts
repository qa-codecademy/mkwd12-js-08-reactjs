import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  amount: number;

  @IsString()
  date: string;

  @IsString()
  fullName: string;

  @IsString()
  address: string;

  @IsArray()
  products: {
    productId: number;
    quantity: number;
  }[];
}
