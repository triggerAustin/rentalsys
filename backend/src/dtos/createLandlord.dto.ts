import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateLandlordDto {
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
