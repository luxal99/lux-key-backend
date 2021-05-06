import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany, OneToOne,
} from 'typeorm';
import { Key } from '../key/Key';
import { Base } from '../generic/base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Index('id_key', ['idKey'], {})
@Entity('key_price', { schema: 'lux_key' })
export class KeyPrice extends Base {

  @ApiProperty()
  @Column('double', { name: 'price', nullable: true, precision: 22 })
  price: number | null;

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

  @ApiProperty({ type: () => Key })
  @ManyToOne(() => Key, (key) => key.keyPrices, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'id_key', referencedColumnName: 'id' }])
  idKey: Key;
}