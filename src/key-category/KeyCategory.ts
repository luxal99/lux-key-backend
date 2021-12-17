import { Column, Entity, OneToMany } from 'typeorm';
import { KeySubCategory } from '../key-sub-category/KeySubCategory';
import { Base } from '../generic/base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('key_category', { schema: 'lux_key' })
export class KeyCategory extends Base {
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

  @OneToMany(
    () => KeySubCategory,
    (keySubCategory) => keySubCategory.idKeyCategory,
  )
  keySubCategories: KeySubCategory[];
}
