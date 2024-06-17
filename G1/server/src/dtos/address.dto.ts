import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';

export class AddressDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty({
    type: String,
    example: 'John Doe',
  })
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    example: 'john.doe@example.com',
  })
  email: string;

  @IsPhoneNumber('MK')
  @ApiProperty({
    type: String,
    example: '+38970223305',
  })
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty({
    type: String,
    example: 'Partizanska bb',
  })
  street: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  @ApiProperty({
    type: String,
    example: 'Skopje',
  })
  city: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  @ApiProperty({
    type: String,
    example: 'Macedonia',
  })
  country: string;
}
