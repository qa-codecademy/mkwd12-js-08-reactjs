import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsUUID, Min } from 'class-validator';

export class OrderItemDto {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    format: 'uuid',
    example: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  })
  dishId: string;

  @IsNumber()
  @Min(1)
  @ApiProperty({
    type: Number,
    example: 1,
  })
  quantity: number;

  @IsNumber()
  @Min(0)
  @ApiProperty({
    type: Number,
    example: 1,
  })
  price: number;

  @IsNumber()
  @Min(0)
  @ApiProperty({
    description: 'The discount percentage of the dish',
    type: Number,
    example: 5,
    default: 0,
  })
  discountPercentage: number;
}
