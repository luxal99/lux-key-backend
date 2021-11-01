import { Base } from '../generic/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
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
    cascade:true
  })
  @JoinColumn([{ name: 'id_client', referencedColumnName: 'id' }])
  idClient: Client;

  @Column({ length: 10240 })
  message: string;
}
