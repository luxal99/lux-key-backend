import { Column, Entity, Index } from 'typeorm';
import { Base } from '../generic/base.entity';

@Index('username', ['username'], { unique: true })
@Entity('user', { schema: 'lux_key' })
export class User extends Base {

  @Column('varchar', { name: 'username', unique: true, length: 64 })
  username: string;

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
