import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { House } from './house.entity';
import { Repository } from 'typeorm';
import { LandlordsService } from 'src/landlords/landlords.service';
import { Landlord } from 'src/landlords/landlord.entity';
import { CreateHouseRequestDto } from 'src/dtos/createHouse.dto';
import { CreateLandlordDto } from 'src/dtos/createLandlord.dto';

@Injectable()
export class HousesService {
  constructor(
    @InjectRepository(House)
    private houseRepo: Repository<House>,
    private landlordsService: LandlordsService,

  ) {}


  getHouses() {
    return this.houseRepo.find()
  }

  async findHouse(house_id: string): Promise<House | null> {
    return this.houseRepo.findOne({
      where: { house_id },
    });
  }

  async createHouse(
    createHouseRequestDto: CreateHouseRequestDto,
  ): Promise<House> {
    // console.log('data', createHouseRequestDto)
    const {
      landlord_name,
      landlord_contact,
      landlord_national_id,
      ...houseData
    } = createHouseRequestDto;

    const createLandlordDto: CreateLandlordDto = {
      landlord_name: landlord_name || 'Unknown',
      landlord_contact: landlord_contact || 'Unknown',
      landlord_national_id: landlord_national_id,
    };

    const landlord = await this.landlordsService.findOrCreateLandlord(
      createHouseRequestDto,
    );

    const house = this.houseRepo.create({
      ...houseData,
      landlord,
    });

    house.house_id = await this.houseRepo
      .query('SELECT generate_house_id() AS house_id')
      .then((result) => result[0].house_id);

    return this.houseRepo.save(house);
  }
}
