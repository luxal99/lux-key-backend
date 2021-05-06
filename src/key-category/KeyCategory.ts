import { Column, Entity, OneToMany } from 'typeorm';
import { KeySubCategory } from '../key-sub-category/KeySubCategory';
import { Base } from '../generic/base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('key_category', { schema: 'lux_key' })
export class KeyCategory extends Base {

  @ApiProperty()
  @Column('varchar', { name: 'name', length: 64 })
  name: string;

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

  @ApiProperty({ type: () => KeySubCategory })
  @OneToMany(
    () => KeySubCategory,
    (keySubCategory) => keySubCategory.idCategory,
  )
  keySubCategories: KeySubCategory[];
}