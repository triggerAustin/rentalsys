import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateUnitDto {
  @IsNotEmpty()
  @IsString()
  house_id: string;

  @IsNotEmpty()
  @IsString()
  unit_number: string;

  @IsOptional()
  @IsString()
  unit_type?: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  payment_rate: number;

  @IsOptional()
  @IsString()
  added_description?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  added_amount?: number;

  @IsOptional()
  @IsString()
  state?: string;
}
