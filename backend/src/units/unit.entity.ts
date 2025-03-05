import { House } from 'src/houses/house.entity';
import { Tenant } from 'src/tenants/tenant.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('units')
export class Unit {
  @PrimaryColumn()
  unit_id: string;

  @ManyToOne(() => House, (house) => house.units, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'house_id' })
  house: House;

  @ManyToOne(() => Tenant, (tenant) => tenant.unit)
  tenants: Tenant[];

  @Column()
  unit_number: string;

  @Column({ nullable: true })
  unit_type?: string;

  @Column('decimal', { precision: 10, scale: 2 })
  payment_rate: number;

  @Column({ type: 'text', nullable: true })
  added_description?: string;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  added_amount?: number;

  @Column({ nullable: true })
  state?: string;
}
