import { Body, Controller, Get, Post } from '@nestjs/common';
import { TenantsService } from './tenants.service';
import { CreateTenantDto } from 'src/dtos/createTenant.dto';
import { Tenant } from './tenant.entity';

@Controller('tenants')
export class TenantsController {
    constructor ( private tenantsService: TenantsService) {}

    @Get()
    getTenants() {
        return this.tenantsService.getTenants()
    }

    @Post()
    async createTenant (@Body() createTenantDto: CreateTenantDto): Promise<Tenant> {
        return this.tenantsService.createTenant(createTenantDto)
    }
}
