import { Controller } from '@nestjs/common';
import { CarBrandService } from './car-brand.service';
import { GenericController } from '../generic/generic.controller';
import { CarBrand } from './CarBrand';

@Controller('car-brand')
export class CarBrandController extends GenericController<CarBrand> {

  constructor(private readonly service: CarBrandService) {
    super(service);
  }
}
