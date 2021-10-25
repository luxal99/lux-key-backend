import { Controller } from '@nestjs/common';
import { WorkServiceService } from './work-service.service';
import { GenericController } from '../generic/generic.controller';
import { WorkService } from './WorkService';

@Controller('work-service')
export class WorkServiceController extends GenericController<WorkService> {
  constructor(private readonly workServiceService: WorkServiceService) {
    super(workServiceService);
  }
}
