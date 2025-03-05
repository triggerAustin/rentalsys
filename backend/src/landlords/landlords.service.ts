import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Landlord } from './landlord.entity';
import { Repository } from 'typeorm';
import { CreateHouseRequestDto } from 'src/dtos/createHouseRequest.dto';


@Injectable()
export class LandlordsService {
  constructor(
    @InjectRepository(Landlord)
    private landlordRepo: Repository<Landlord>,
  ) {}

  getLandlords() {
    return this.landlordRepo.find();
  }

  async findLandlordByNationalId(
    landlord_national_id: string,
  ): Promise<Landlord | null> {
    return this.landlordRepo.findOne({
      where: { landlord_national_id: landlord_national_id },
    });
  }

  async findOrCreateLandlord(
    createLandlordDto: CreateHouseRequestDto,
  ): Promise<Landlord> {
    // Check if a landlord exists with the same national ID
    if (createLandlordDto.landlord_national_id) {
      let existingLandlord = await this.findLandlordByNationalId(
        createLandlordDto.landlord_national_id,
      );
      if (existingLandlord) {
        return existingLandlord; // Reuse existing landlord
      }
    }

    // If no match by national ID, check by landlord_id
    let landlord = await this.landlordRepo.findOne({
      where: { landlord_national_id: createLandlordDto.landlord_national_id },
    });

    if (!landlord) {
      landlord = this.landlordRepo.create(createLandlordDto);

      landlord.landlord_id = await this.landlordRepo
        .query('SELECT generate_landlord_id() AS landlord_id')
        .then((result) => result[0].landlord_id);

      landlord = await this.landlordRepo.save(landlord);
    }

    return landlord;
  }
}
