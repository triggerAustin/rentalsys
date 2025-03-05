import {
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsDecimal,
  IsString,
  MaxLength,
  Length,
} from 'class-validator';

export class CreateHouseRequestDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  house_name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  lr_number: string;

  @IsDecimal()
  @IsNotEmpty()
  agreed_commission: number;

  @IsBoolean()
  @IsOptional()
  water_bill: boolean;

  @IsDecimal()
  @IsNotEmpty()
  water_bill_price: number;

  @IsBoolean()
  @IsOptional()
  garbage_collection: boolean;

  @IsDecimal()
  @IsOptional()
  garbage_collection_price: number;

  @IsBoolean()
  @IsOptional()
  electricity_bill: boolean;

  @IsDecimal()
  @IsOptional()
  electricity_bill_price: number;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  added_field_1_name?: string;

  @IsDecimal()
  @IsOptional()
  added_field_1_price?: number;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  added_field_2_name?: string;

  @IsDecimal()
  @IsOptional()
  added_field_2_price?: number;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  added_field_3_name?: string;

  @IsDecimal()
  @IsOptional()
  added_field_3_price?: number;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  added_field_4_name?: string;

  @IsDecimal()
  @IsOptional()
  added_field_4_price?: number;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  added_field_5_name?: string;

  @IsDecimal()
  @IsOptional()
  added_field_5_price?: number;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  added_field_6_name?: string;

  @IsDecimal()
  @IsOptional()
  added_field_6_price?: number;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  landlord_name: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  landlord_contact: string;

  @IsString()
  @IsOptional()
  @Length(1, 20)
  landlord_national_id?: string;
}
