import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { KeyCategory } from '../key-category/KeyCategory';
import { Base } from '../generic/base.entity';
import { Key } from '../key/Key';
import { ServiceType } from '../enum/ServiceType';

@Index('id_key_category', ['idKeyCategory'], {})
@Entity('key_sub_category', { schema: 'lux_key' })
export class KeySubCategory extends Base {

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

  @ManyToOne(() => KeyCategory, (keyCategory) => keyCategory.keySubCategories, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'id_key_category', referencedColumnName: 'id' }])
  idKeyCategory: KeyCategory;

  @OneToMany(() => Key, (key) => key.idKeySubCategory)
  keys: Key[];

  @Column({
    type: 'enum',
    enum: ServiceType,
  })
  serviceType: ServiceType;

}
