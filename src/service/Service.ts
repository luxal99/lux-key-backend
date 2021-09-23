import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { ServiceKey } from '../service-key/ServiceKey';
import { Base } from '../generic/base.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Client } from '../client/Client';

@Entity('service', { schema: 'lux_key' })
export class Service extends Base {

  @Column('date', { name: 'date' })
  date: string;

  @Column('double', {
    name: 'coding_service_price',
    nullable: true,
    precision: 22,
  })
  codingServicePrice: number | null;

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

  @ManyToOne(type => Client, (client) => client.services)
  idClient: Client;

  @Column({ type: 'longtext' })
  notes: string;
}
