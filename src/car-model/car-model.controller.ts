import { Controller } from '@nestjs/common';
import { CarModelService } from './car-model.service';

@Controller('car-model')
export class CarModelController {
  constructor(private readonly carModelService: CarModelService) {}
}
