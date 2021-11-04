import { Base } from '../generic/base.entity';
import { Column, Entity, OneToOne } from 'typeorm';
import { Key } from '../key/Key';

@Entity()
export class KeyImage extends Base {
  @Column('timestamp', {
    name: 'created_date',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdDate: Date | null;

  @Column({ nullable: false, unique: true })
  name: string;

  @Column({ nullable: false, unique: true })
  url: string;

  @OneToOne(() => Key, user => user.idImage)
  idKey: Key;
}
