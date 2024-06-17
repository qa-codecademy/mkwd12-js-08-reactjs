import { ApiPropertyOptional } from '@nestjs/swagger';
import { Category } from '../common/types/categories.enum';
import { SortBy, SortDirection } from '../common/types/sort.enum';
import { Type } from 'class-transformer';

export class DishQueryDto {
  @ApiPropertyOptional({
    description: 'Search by the name of the dish',
    type: String,
  })
  name?: string;

  @ApiPropertyOptional({
    description: 'The category of the dish',
    enum: Category,
  })
  category?: Category;

  @ApiPropertyOptional({
    description: 'The way to sort the dish',
    enum: SortBy,
  })
  sortBy?: SortBy;

  @ApiPropertyOptional({
    description: 'The sort direction of the dish',
    enum: SortDirection,
  })
  sortDirection?: SortDirection;

  @ApiPropertyOptional({
    description: 'Page number to get',
    type: Number,
    default: 1,
  })
  @Type(() => Number)
  page: number = 1;

  @ApiPropertyOptional({
    description: 'Number of dishes to get per page',
    type: Number,
    default: 10,
  })
  @Type(() => Number)
  pageSize: number = 10;
}
