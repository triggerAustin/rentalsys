import { Body, Controller, Get, Post } from '@nestjs/common';
import { UnitsService } from './units.service';
import { CreateUnitDto } from 'src/dtos/createUnit.dto';
import { Unit } from './unit.entity';

@Controller('units')
export class UnitsController {
    constructor ( private unitsService: UnitsService) {}

    @Post()
    async createUnit( @Body() createUnitDto: CreateUnitDto): Promise<Unit> {
        return this.unitsService.createUnit(createUnitDto)
    }

    @Get()
    getUnits() {
        return this.unitsService.getUnits()
    }
}
