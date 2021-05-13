import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { ServiceKey } from '../service-key/ServiceKey';
import { Base } from '../generic/base.entity';
import { ApiProperty } from '@nestjs/swagger';
import { ServiceType } from '../enum/ServiceType';
import { Client } from '../client/Client';

@Entity('service', { schema: 'lux_key' })
export class Service extends Base {
  @Column('date', { name: 'date' })
  @ApiProperty()
  date: string;

  @Column('double', {
    name: 'coding_service_price',
    nullable: true,
    precision: 22,
  })
  @ApiProperty()
  codingServicePrice: number | null;

  @ApiProperty()
  @Column('double', { name: 'gross', precision: 22 })
  gross: number;


  @Column({
    type: 'enum',
    enum: ServiceType,
  })
  serviceType: ServiceType;

  @Column('timestamp', {
    name: 'created_date',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  @ApiProperty()
  createdDate: Date | null;

  @Column('timestamp', {
    name: 'last_modified_date',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  @ApiProperty()
  lastModifiedDate: Date | null;

  @OneToMany(() => ServiceKey, (serviceKey) => serviceKey.idService)
  @ApiProperty({ type: () => ServiceKey })
  serviceKeys: ServiceKey[];

  @ApiProperty({ type: () => Client })
  @ManyToOne(type => Client, (client) => client.services)
  idClient: Client;

  @ApiProperty()
  @Column({ type: 'longtext' })
  notes: string;
}
