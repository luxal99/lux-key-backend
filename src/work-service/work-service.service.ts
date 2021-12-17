import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { WorkService } from './WorkService';
import { WorkServiceRepository } from './work-service.repository';

@Injectable()
export class WorkServiceService extends GenericService<WorkService> {
  constructor(private repository: WorkServiceRepository) {
    super(repository, []);
  }
}
