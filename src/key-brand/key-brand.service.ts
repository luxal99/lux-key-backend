import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { KeyBrand } from './KeyBrand';
import { KeyBrandRepository } from './key-brand.repository';

@Injectable()
export class KeyBrandService extends GenericService<KeyBrand> {
  constructor(repository: KeyBrandRepository) {
    super(repository, []);
  }
}
