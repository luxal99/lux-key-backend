import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { CarModel } from './CarModel';
import { CarModelRepository } from './car-model.repository';

@Injectable()
export class CarModelService extends GenericService<CarModel> {
  constructor(private readonly repository: CarModelRepository) {
    super(repository, ['idCarBrand']);
  }
}
