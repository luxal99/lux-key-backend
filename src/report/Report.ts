import { Base } from '../generic/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Report extends Base {
  @Column('timestamp', {
    name: 'created_date',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdDate: Date | null;

  @Column('varchar', { name: 'path', length: 128 })
  path: string;

  constructor(path: string) {
    super();
    this.path = path;
  }
}
