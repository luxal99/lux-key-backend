import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Service } from '../service/Service';
import { Key } from '../key/Key';
import { Base } from '../generic/base.entity';
import { ApiProperty } from '@nestjs/swagger';
import { ServiceType } from '../enum/ServiceType';

@Index('id_service', ['idService'], {})
@Index('id_key', ['idKey'], {})
@Entity('service_key', { schema: 'lux_key' })
export class ServiceKey extends Base {

  @Column('double', { name: 'key_price', precision: 22 })
  keyPrice: number;

  @Column('double', { name: 'key_purchase_price' })
  keyPurchasePrice: number;


  @ManyToOne(() => Service, (service) => service.serviceKeys, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'id_service', referencedColumnName: 'id' }])
  idService: Service;

  @ManyToOne(() => Key, (key) => key.serviceKeys, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'id_key', referencedColumnName: 'id' }])
  idKey: Key;


  @Column({
    type: 'enum',
    array: true,
    enum: ServiceType
  })
  serviceType: ServiceType;

}
