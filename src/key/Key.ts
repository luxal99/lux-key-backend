import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany, OneToOne,
} from 'typeorm';
import { KeyPrice } from '../key-price/KeyPrice';
import { ServiceKey } from '../service-key/ServiceKey';
import { Base } from '../generic/base.entity';
import { ApiProperty } from '@nestjs/swagger';
import { KeySubCategory } from '../key-sub-category/KeySubCategory';
import { CarModel } from '../car-model/CarModel';

@Index('code', ['code'], { unique: true })
@Index('id_current_price', ['idCurrentPrice'], {})
@Entity('key', { schema: 'lux_key' })
export class Key extends Base {

  @ApiProperty()
  @Column('varchar', { name: 'name', length: 64 })
  name: string;

  @ApiProperty()
  @Column('int', { name: 'amount', nullable: true })
  amount: number | null;

  @ApiProperty()
  @Column('double', { name: 'purchase_price', nullable: false })
  purchasePrice: number | null;

  @ApiProperty()
  @Column('varchar', { name: 'code', unique: true, length: 64 })
  code: string;

  @ApiProperty()
  @Column('timestamp', {
    name: 'created_date',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdDate: Date | null;

  @ApiProperty()
  @Column('timestamp', {
    name: 'last_modified_date',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  lastModifiedDate: Date | null;

  @ApiProperty()
  @OneToOne(() => KeyPrice, { cascade: true })
  @JoinColumn([{ name: 'id_current_price', referencedColumnName: 'id' }])
  idCurrentPrice: KeyPrice;

  @ApiProperty({ type: () => KeySubCategory })
  @ManyToOne(() => KeySubCategory, (keySubCategory) => keySubCategory.keys, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'id_key_sub_category', referencedColumnName: 'id' }])
  idKeySubCategory: KeySubCategory;

  @ApiProperty({ type: () => CarModel })
  @ManyToOne(() => CarModel, (carModel) => carModel.keys, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'id_car_model', referencedColumnName: 'id' }])
  idCarModel: CarModel;

  @ApiProperty({ type: () => KeyPrice })
  @OneToMany(() => KeyPrice, (keyPrice) => keyPrice.idKey, { cascade: true, onDelete: 'CASCADE' })
  keyPrices: KeyPrice[];

  @OneToMany(() => ServiceKey, (serviceKey) => serviceKey.idKey, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  serviceKeys: ServiceKey[];
}
