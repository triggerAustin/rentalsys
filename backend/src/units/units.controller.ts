import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UnitsService } from './units.service';
import { CreateUnitDto } from 'src/dtos/createUnit.dto';
import { Unit } from './unit.entity';

@Controller('units')
export class UnitsController {
  constructor(private unitsService: UnitsService) {}

  @Post()
  async createUnit(@Body() createUnitDto: CreateUnitDto): Promise<Unit> {
    return this.unitsService.createUnit(createUnitDto);
  }

  @Get(':houseId')
  getUnits(@Param('houseId') houseId: string) {
    return this.unitsService.getUnits(houseId);
  }
}
