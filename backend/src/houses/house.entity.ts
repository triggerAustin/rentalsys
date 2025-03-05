import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Landlord } from '../landlords/landlord.entity';
import { Unit } from 'src/units/unit.entity';
import { Tenant } from 'src/tenants/tenant.entity';

@Entity('houses')
export class House {
  @PrimaryColumn({ type: 'varchar', length: 20 })
  house_id: string;

  @OneToMany(() => Unit, (unit) => unit.house)
  units: Unit[];

  @ManyToOne(() => Tenant, (tenant) => tenant.house)
  tenants: Tenant[];

  @Column({ type: 'varchar', length: 100, nullable: false })
  house_name: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  lr_number: string;

  @ManyToOne(() => Landlord, (landlord) => landlord.houses, { nullable: false })
  @JoinColumn({ name: 'landlord_id' })
  landlord: Landlord;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  agreed_commission: number;

  @Column({ type: 'tinyint', width: 1, nullable: true })
  water_bill: boolean;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  water_bill_price: number;

  @Column({ type: 'tinyint', width: 1, nullable: true })
  garbage_collection: boolean;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  garbage_collection_price: number;

  @Column({ type: 'tinyint', width: 1, nullable: true })
  electricity_bill: boolean;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  electricity_bill_price: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  added_field_1_name?: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.0 })
  added_field_1_price?: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  added_field_2_name?: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.0 })
  added_field_2_price?: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  added_field_3_name?: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.0 })
  added_field_3_price?: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  added_field_4_name?: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.0 })
  added_field_4_price?: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  added_field_5_name?: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.0 })
  added_field_5_price?: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  added_field_6_name?: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.0 })
  added_field_6_price?: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
