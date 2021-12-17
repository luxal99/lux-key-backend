import { Base } from '../generic/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Service } from '../service/Service';

@Entity()
export class WorkService extends Base {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  price: number;

  @OneToMany((type) => Service, (service) => service.idWorkService)
  services: Service[];
}
