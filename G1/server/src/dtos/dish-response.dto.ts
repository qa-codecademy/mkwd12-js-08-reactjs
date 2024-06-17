import { ApiProperty } from '@nestjs/swagger';
import { Dish } from '../entities/dish.entity';

export class DishResponseDto {
  @ApiProperty({
    type: [Dish],
    description: 'A list of dishes',
  })
  payload: Dish[];

  @ApiProperty({
    type: Number,
    description: 'Total number of dishes',
  })
  total: number;
}
