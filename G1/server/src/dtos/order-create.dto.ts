import {
  ArrayNotEmpty,
  IsArray,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { OrderItemDto } from './order-dish.dto';
import { AddressDto } from './address.dto';
import { ApiProperty } from '@nestjs/swagger';

export class OrderCreateDto {
  @IsArray()
  @ArrayNotEmpty()
  @Type(() => OrderItemDto)
  @ValidateNested({ each: true })
  @ApiProperty({
    type: OrderItemDto,
    isArray: true,
  })
  items: OrderItemDto[];

  @IsObject()
  @Type(() => AddressDto)
  @ValidateNested()
  @ApiProperty({
    type: AddressDto,
  })
  address: AddressDto;
}
