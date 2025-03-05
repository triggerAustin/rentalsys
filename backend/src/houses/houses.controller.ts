import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HousesService } from './houses.service';
import { House } from './house.entity';
import { CreateHouseRequestDto } from 'src/dtos/createHouse.dto';

@Controller('houses')
export class HousesController {
  constructor(private readonly houseService: HousesService) {}

  @Get()
  async getHouses() {
    return await this.houseService.getHouses();
  }

  @Get(':id')
  async getHouse(@Param('house_id') house_id: string) {
    return this.houseService.findHouse(house_id);
  }

  @Post()
  async createHouse(
    @Body() CreateHouseDto: CreateHouseRequestDto,
  ): Promise<House> {
    return this.houseService.createHouse(CreateHouseDto);
  }
}
