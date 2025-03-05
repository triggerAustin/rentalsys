import { Module } from '@nestjs/common';
import { TenantsController } from './tenants.controller';
import { TenantsService } from './tenants.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tenant } from './tenant.entity';
import { Unit } from 'src/units/unit.entity';
import { House } from 'src/houses/house.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tenant, Unit, House])],
  controllers: [TenantsController],
  providers: [TenantsService]
})
export class TenantsModule {}
