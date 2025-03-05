import { Module } from '@nestjs/common';
import { UnitsController } from './units.controller';
import { UnitsService } from './units.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unit } from './unit.entity';
import { House } from 'src/houses/house.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Unit, House])],
  controllers: [UnitsController],
  providers: [UnitsService]
})
export class UnitsModule {}
