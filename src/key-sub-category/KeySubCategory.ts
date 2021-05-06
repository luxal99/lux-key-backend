import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne, OneToMany,
} from 'typeorm';
import { KeyCategory } from '../key-category/KeyCategory';
import { Base } from '../generic/base.entity';
import { Key } from '../key/Key';
import { ApiProperty } from '@nestjs/swagger';

@Index('id_category', ['idCategory'], {})
@Entity('key_sub_category', { schema: 'lux_key' })
export class KeySubCategory extends Base {


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

  @ManyToOne(() => KeyCategory, (keyCategory) => keyCategory.keySubCategories, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @ApiProperty({ type: () => KeyCategory })
  @JoinColumn([{ name: 'id_category', referencedColumnName: 'id' }])
  idCategory: KeyCategory;

  @ApiProperty({ type: () => Key })
  @OneToMany(() => Key, (key) => key.idKeySubCategory)
  keys: Key[];

}
