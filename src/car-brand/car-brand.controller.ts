import { Controller } from '@nestjs/common';
import { CarBrandService } from './car-brand.service';

@Controller('car-brand')
export class CarBrandController {
  constructor(private readonly carBrandService: CarBrandService) {}
}
