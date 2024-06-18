import { IsNumber, IsString, IsUrl, Length, Max, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @Length(3, 100)
  title: string;

  @IsNumber()
  @Min(0)
  stock: number;

  @IsNumber()
  @Min(0)
  @Max(10000)
  price: number;

  @IsString()
  description: string;

  @IsUrl()
  image: string;

  @IsString()
  category: string;
}
