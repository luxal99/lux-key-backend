import { Controller } from '@nestjs/common';
import { KeyBrandService } from './key-brand.service';
import { GenericController } from '../generic/generic.controller';
import { KeyBrand } from './KeyBrand';

@Controller('key-brand')
export class KeyBrandController extends GenericController<KeyBrand> {
  constructor(private readonly keyBrandService: KeyBrandService) {
    super(keyBrandService);
  }
}
