import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne, OneToMany,
} from 'typeorm';
import { CarBrand } from '../car-brand/CarBrand';
import { Base } from '../generic/base.entity';
import { ApiProperty } from '@nestjs/swagger';
import { KeyPrice } from '../key-price/KeyPrice';
import { Key } from '../key/Key';

@Index('id_car_brand', ['idCarBrand'], {})
@Entity('car_model', { schema: 'lux_key' })
export class CarModel extends Base {

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

  @ManyToOne(() => CarBrand, (carBrand) => carBrand.carModels, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'id_car_brand', referencedColumnName: 'id' }])
  idCarBrand: CarBrand;

  @OneToMany(() => Key, (keyPrice) => keyPrice.idCarModel, { cascade: true })
  keys: Key[];

}
