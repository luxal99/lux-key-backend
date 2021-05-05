import { Controller } from '@nestjs/common';
import { CarModelService } from './car-model.service';
import { GenericController } from '../generic/generic.controller';
import { CarModel } from './CarModel';

@Controller('car-model')
export class CarModelController extends GenericController<CarModel> {
  constructor(private readonly service: CarModelService) {
    super(service);
  }
}
