import { Controller, Get } from '@nestjs/common';
import { LandlordsService } from './landlords.service';

@Controller('landlords')
export class LandlordsController {

    constructor(private landlordService: LandlordsService) {}

    @Get()
    async getLandlords() {
        const landlords =  await this.landlordService.getLandlords();
        return landlords
    }
}
