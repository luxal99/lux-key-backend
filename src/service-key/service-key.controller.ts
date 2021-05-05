import { Controller } from '@nestjs/common';
import { ServiceKeyService } from './service-key.service';

@Controller('service-key')
export class ServiceKeyController {
  constructor(private readonly serviceKeyService: ServiceKeyService) {}
}
