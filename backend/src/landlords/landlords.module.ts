import { Module } from '@nestjs/common';
import { LandlordsController } from './landlords.controller';
import { LandlordsService } from './landlords.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Landlord } from './landlord.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Landlord])],
  controllers: [LandlordsController],
  providers: [LandlordsService]
})
export class LandlordsModule {}
