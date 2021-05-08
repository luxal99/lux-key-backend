import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { KeySubCategoryRepository } from './key-sub-category.repository';
import { KeySubCategory } from './KeySubCategory';

@Injectable()
export class KeySubCategoryService extends GenericService<KeySubCategory> {

  constructor(private repository: KeySubCategoryRepository) {
    super(repository, ['idKeyCategory']);
  }
}
