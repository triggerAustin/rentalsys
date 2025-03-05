import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
  IsDateString,
} from 'class-validator';

export class CreateTenantDto {
  @IsNotEmpty()
  @IsString()
  tenant_id: string;

  @IsNotEmpty()
  @IsString()
  unit_id?: string;

  @IsNotEmpty()
  @IsString()
  house_id?: string;

  @IsOptional()
  @IsString()
  tenant_photo?: string;

  @IsOptional()
  @IsString()
  tenant_name?: string;

  @IsOptional()
  @IsString()
  tenant_national_id?: string;

  @IsOptional()
  @IsString()
  tenant_contact?: string;

  @IsOptional()
  @IsInt()
  current_meter_reading?: number;

  @IsOptional()
  @IsDateString()
  move_in_date?: string;

  @IsOptional()
  @IsString()
  state?: string;
}
