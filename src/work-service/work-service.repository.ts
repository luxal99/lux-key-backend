import { EntityRepository, Repository } from 'typeorm';
import { WorkService } from './WorkService';

@EntityRepository(WorkService)
export class WorkServiceRepository extends Repository<WorkService> {

}
