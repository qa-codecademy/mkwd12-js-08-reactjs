import { Currency, Status } from '../entity/trip/trip.interface';
import {
  IsNotEmpty,
  IsNumber,
  MinLength,
  IsEnum,
  ValidateNested,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

class BudgetDTO {
  @ApiProperty({ enum: Currency, example: Currency.MKD })
  @IsEnum(Currency)
  currency: Currency;

  @ApiProperty()
  @IsNumber()
  amount: number;
}

export class TripDTO {
  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => BudgetDTO)
  budget: BudgetDTO;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(2)
  destination: string;

  @ApiProperty({ enum: Status })
  @IsNotEmpty()
  @IsEnum(Status)
  status: Status;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(2)
  notes: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  startDate: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  endDate: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  imageUrl: string;
}

export class UpdateTripDTO extends PartialType(TripDTO) {}
