import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { ServiceKey } from '../service-key/ServiceKey';
import { Base } from '../generic/base.entity';
import { Client } from '../client/Client';
import { WorkService } from 'src/work-service/WorkService';

@Entity('service', { schema: 'lux_key' })
export class Service extends Base {
  @Column('date', { name: 'date' })
  date: string;

  @Column('double', { name: 'gross', precision: 22 })
  gross: number;

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

  @OneToMany(() => ServiceKey, (serviceKey) => serviceKey.idService, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  serviceKeys: ServiceKey[];

  @ManyToOne((type) => Client, (client) => client.services)
  idClient: Client;

  @ManyToOne((type) => WorkService, (workService) => workService.services)
  idWorkService: WorkService;

  @Column({ type: 'longtext', nullable: true })
  notes: string;
}
