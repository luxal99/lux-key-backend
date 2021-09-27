import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { KeyPrice } from '../key-price/KeyPrice';
import { ServiceKey } from '../service-key/ServiceKey';
import { Base } from '../generic/base.entity';
import { KeySubCategory } from '../key-sub-category/KeySubCategory';
import { CarModel } from '../car-model/CarModel';

@Index('code', ['code'], { unique: true })
@Index('id_current_price', ['idCurrentPrice'], {})
@Entity('key', { schema: 'lux_key' })
export class Key extends Base {

  @Column('varchar', { name: 'name', length: 64 })
  name: string;

  @Column('int', { name: 'amount', nullable: true })
  amount: number | null;

  @Column('varchar', { name: 'code', unique: true, length: 64 })
  code: string;

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

  @OneToOne(() => KeyPrice, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn([{ name: 'id_current_price', referencedColumnName: 'id' }])
  idCurrentPrice: KeyPrice;

  @ManyToOne(() => KeySubCategory, (keySubCategory) => keySubCategory.keys, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'id_key_sub_category', referencedColumnName: 'id' }])
  idKeySubCategory: KeySubCategory;

  @ManyToOne(() => CarModel, (carModel) => carModel.keys, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    nullable:false
  })
  @JoinColumn([{ name: 'id_car_model', referencedColumnName: 'id', }])
  idCarModel: CarModel;

  @OneToMany(() => KeyPrice, (keyPrice) => keyPrice.idKey)
  keyPrices: KeyPrice[];

  @OneToMany(() => ServiceKey, (serviceKey) => serviceKey.idKey, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  serviceKeys: ServiceKey[];
}
