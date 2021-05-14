import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Service } from './Service';
import { ServiceRepository } from './service.repository';

@Injectable()
export class ServiceService extends GenericService<Service> {

  constructor(genericRepository: ServiceRepository) {
    super(genericRepository, ['serviceKeys', 'idClient', 'serviceKeys.idKey',
      'serviceKeys.idKey.idCurrentPrice', 'serviceKeys.idKey.idCarModel',
      'serviceKeys.idKey.idCarModel.idCarBrand']);
  }
}
