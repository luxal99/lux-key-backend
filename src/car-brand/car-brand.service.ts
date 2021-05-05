import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { CarBrand } from './CarBrand';
import { CarBrandRepository } from './car-brand.repository';

@Injectable()
export class CarBrandService extends GenericService<CarBrand> {

  constructor(private repository: CarBrandRepository) {
    super(repository, []);
  }
}
