import { Controller } from '@nestjs/common';
import { ServiceKeyService } from './service-key.service';
import { GenericController } from '../../generic/generic.controller';
import { ServiceKey } from './ServiceKey';

@Controller('service-key')
export class ServiceKeyController extends GenericController<ServiceKey> {
  constructor(private readonly serviceKeyService: ServiceKeyService) {
    super(serviceKeyService);
  }
}
