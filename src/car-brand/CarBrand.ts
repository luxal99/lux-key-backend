import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from '../generic/base.entity';
import { Key } from '../key/Key';

@Entity('car_brand', { schema: 'lux_key' })
export class CarBrand extends Base {
  @Column('varchar', { name: 'name', length: 64 })
  name: string;

  @Column('timestamp', {
    name: 'created_date',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdDate: Date | null;

  @Column('timestamp', {
    name: 'last_modified_date',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  lastModifiedDate: Date | null;
}
