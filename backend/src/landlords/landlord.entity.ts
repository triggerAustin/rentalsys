import { Entity, Column, PrimaryColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { House } from 'src/houses/house.entity';

@Entity('landlords')
export class Landlord {
  @PrimaryColumn({ type: 'varchar', length: 20 })
  landlord_id: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  landlord_name: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  landlord_contact: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  landlord_national_id?: string;

  @OneToMany(() => House, (house) => house.landlord)
  houses: House[];
}
