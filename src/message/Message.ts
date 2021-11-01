import { Base } from '../generic/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { KeyBrand } from '../key-brand/KeyBrand';
import { Client } from '../client/Client';

@Entity()
export class Message extends Base {


  @Column('timestamp', {
    name: 'created_date',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdDate: Date | null;

  @ManyToOne(() => Client, (client) => client.messages, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'id_client', referencedColumnName: 'id' }])
  idClient: KeyBrand;
}
