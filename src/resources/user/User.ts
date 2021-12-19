import { Column, Entity, Index } from 'typeorm';
import { Base } from '../../generic/base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Index('username', ['username'], { unique: true })
@Entity('user', { schema: 'lux_key' })
export class User extends Base {
  @ApiProperty()
  @Column('varchar', { name: 'username', unique: true, length: 64 })
  username: string;

  @ApiProperty()
  @Column('varchar', { name: 'password', unique: true, length: 64 })
  password: string;

  @Column('timestamp', {
    name: 'created_date',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  @ApiProperty()
  createdDate: Date | null;

  @ApiProperty()
  @Column('timestamp', {
    name: 'last_modified_date',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  lastModifiedDate: Date | null;
}
