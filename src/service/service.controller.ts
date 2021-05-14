import { Controller } from '@nestjs/common';
import { ServiceService } from './service.service';
import { GenericController } from '../generic/generic.controller';
import { Service } from './Service';

@Controller('service')
export class ServiceController extends GenericController<Service> {
  constructor(private readonly serviceService: ServiceService) {
    super(serviceService);
  }
}
