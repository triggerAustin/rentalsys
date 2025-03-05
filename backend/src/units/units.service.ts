import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Unit } from './unit.entity';
import { Repository } from 'typeorm';
import { CreateUnitDto } from 'src/dtos/createUnit.dto';
import { House } from 'src/houses/house.entity';

@Injectable()
export class UnitsService {
    constructor(
        @InjectRepository(Unit)
        private unitRepository: Repository <Unit>,

        @InjectRepository(House)
        private houseRepo: Repository<House>
    ) {}


    getUnits() {
        return this.unitRepository.find({ relations: ['house']});
        
    }

    async createUnit(createUnitDto: CreateUnitDto): Promise<Unit> {
        const {
          house_id,
          unit_number,
          unit_type,
          payment_rate,
          added_description,
          added_amount,
          state,
        } = createUnitDto;

        const house = await this.houseRepo.findOne({ where: { house_id}});
        if (!house) throw new NotFoundException(`house with id ${house_id} not found`)

        const lastUnit = await this.unitRepository.findOne({
            where: { house },
            order: { unit_id: 'DESC' },
        });

        let newUnitNumber = 1;
        if (lastUnit) {
            const lastNumber = parseInt(lastUnit.unit_id.replace(`${house_id}ut`, ''), 10);
            newUnitNumber = lastNumber + 1;
        }

        const unit_id = `${house_id}ut${newUnitNumber}`;

        const newUnit = this.unitRepository.create({
          unit_id,
          house,
          unit_number,
          unit_type,
          payment_rate,
          added_description,
          added_amount,
          state,
        });


        return this.unitRepository.save(newUnit)
    }
}
