import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from '../../generic/base.entity';
import { Service } from '../service/Service';
import { Message } from '../message/Message';

@Entity()
export class Client extends Base {
  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ nullable: true, unique: true })
  telephone: string;

  @OneToMany((type) => Service, (service) => service.idClient)
  services: Service[];

  @OneToMany(() => Message, (message) => message.idClient, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  messages: Message[];
}
