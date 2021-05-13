import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { ServiceKey } from './ServiceKey';
import { ServiceKeyRepository } from './service-key.repository';

@Injectable()
export class ServiceKeyService extends GenericService<ServiceKey> {

  constructor(genericRepository: ServiceKeyRepository) {
    super(genericRepository, []);
  }
}
