import { Controller, Get, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DishQueryDto } from '../dtos/dish-query.dto';
import { DishService } from '../servicers/dish.service';
import { DishResponseDto } from '../dtos/dish-response.dto';

@ApiTags('Dish')
@Controller('dishes')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @ApiResponse({ status: 200, description: 'Success', type: DishResponseDto })
  @ApiQuery({
    name: 'name',
    description: 'Search by the name of the dish',
    required: false,
    type: String,
  })
  @Get()
  getDishes(@Query() dishQueryDto: DishQueryDto) {
    console.log(dishQueryDto);
    return this.dishService.getDishes(dishQueryDto);
  }

  @ApiResponse({ status: 200, description: 'Success' })
  @ApiOperation({
    summary: 'Populate dishes',
    description:
      'This is meant to be used to run a cleanup of the Dish table and populate the database.',
  })
  @Put()
  populateDishes() {
    return this.dishService.populateDishes();
  }
}
