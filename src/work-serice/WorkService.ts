import { Base } from '../generic/base.entity';
import { Column, Entity } from 'typeorm';
import { ServiceType } from '../enum/ServiceType';

@Entity('work_service', { schema: 'lux_key' })
export class WorkService extends Base {

  @Column({ name: 'price'})
  price: number | null;

  @Column('varchar', { name: 'name', length: 64 })
  name: string;

  @Column('timestamp', {
    name: 'created_date',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdDate: Date | null;

}
