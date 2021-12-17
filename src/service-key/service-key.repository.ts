import { EntityRepository, Repository } from 'typeorm';
import { ServiceKey } from './ServiceKey';

@EntityRepository(ServiceKey)
export class ServiceKeyRepository extends Repository<ServiceKey> {}
