import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from '../generic/base.entity';
import { Service } from '../service/Service';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Client extends Base {

  @Column({ nullable: false })
  firstName: string;


  @Column({ nullable: false })
  lastName: string;


  @Column({ nullable: false })
  telephone: string;

  @OneToMany(type => Service, (service) => service.idClient)
  services: Service[];
}
