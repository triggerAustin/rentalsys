import { Module } from '@nestjs/common';
import { HousesController } from './houses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { House } from './house.entity';
import { Landlord } from 'src/landlords/landlord.entity';
import { HousesService } from './houses.service';
import { LandlordsService } from 'src/landlords/landlords.service';

@Module({
  imports: [TypeOrmModule.forFeature([House, Landlord])],
  controllers: [HousesController],
  providers: [HousesService, LandlordsService],
  exports: [HousesService],
})
export class HousesModule {}
