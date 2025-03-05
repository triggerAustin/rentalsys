import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tenant } from './tenant.entity';
import { CreateTenantDto } from 'src/dtos/createTenant.dto';
import { House } from 'src/houses/house.entity';
import { Unit } from 'src/units/unit.entity';

@Injectable()
export class TenantsService {
  constructor(
    @InjectRepository(Tenant)
    private tenantRepo: Repository<Tenant>,

    @InjectRepository(House)
    private houseRepo: Repository<House>,

    @InjectRepository(Unit)
    private unitRepo: Repository<Unit>,
  ) {}

  getTenants() {
    return this.tenantRepo.find({ relations: ['house', 'unit']});
  }

  async createTenant(createTenantDto: CreateTenantDto): Promise<Tenant> {
    const {
      house_id,
      unit_id,
      tenant_photo,
      tenant_name,
      tenant_national_id,
      tenant_contact,
      current_meter_reading,
      move_in_date,
      state,
    } = createTenantDto;

    const house = await this.houseRepo.findOne({ where: { house_id } });
    const unit = await this.unitRepo.findOne({ where: { unit_id } });

    if (!house) throw new NotFoundException(`House with id ${house_id} not found`);
    if (!unit) throw new NotFoundException(`Unit with id ${unit_id} not found`);

    const lastTenant = await this.tenantRepo.findOne({
      where: { house, unit },
      order: { tenant_id: 'DESC' },
    });

    let newTenantNumber = 1;
    if (lastTenant) {
      const lastNumber = parseInt(
        lastTenant.tenant_id.replace(`${unit_id}t`, ''),
        10,
      );
      newTenantNumber = lastNumber + 1;
    }

    const tenant_id = `${unit_id}t${newTenantNumber}`;

    const newTenant = this.tenantRepo.create({
      tenant_id,
      house,
      unit,
      tenant_photo,
      tenant_name,
      tenant_national_id,
      tenant_contact,
      current_meter_reading,
      move_in_date,
      state,
    });

    return await this.tenantRepo.save(newTenant);
  }
}