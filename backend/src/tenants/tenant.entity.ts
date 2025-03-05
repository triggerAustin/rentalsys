import { House } from 'src/houses/house.entity';
import { Unit } from 'src/units/unit.entity';
import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';

@Entity('tenants')
export class Tenant {
  @PrimaryColumn()
  tenant_id: string;

  @ManyToOne(() => House, (house) => house.tenants)
  house: House;

  @ManyToOne(() => Unit, (unit) => unit.tenants)
  unit: Unit;

  @Column({ nullable: true })
  tenant_photo: string;

  @Column()
  tenant_name: string;

  @Column({ unique: true, nullable: true })
  tenant_national_id: string;

  @Column({ nullable: true })
  tenant_contact: string;

  @Column({ default: 0 })
  current_meter_reading: number;

  @Column({ type: 'date', nullable: true })
  move_in_date: string;

  @Column({ nullable: true })
  state: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  created_on: Date;
}
