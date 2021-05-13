import { EntityRepository, Repository } from 'typeorm';
import { Service } from './Service';

@EntityRepository(Service)
export class ServiceRepository extends Repository<Service> {
}
