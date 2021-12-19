import { Injectable } from '@nestjs/common';
import { GenericService } from '../../generic/generic.service';
import { KeyCategory } from './KeyCategory';
import { KeyCategoryRepository } from './key-category.repository';

@Injectable()
export class KeyCategoryService extends GenericService<KeyCategory> {
  constructor(private repository: KeyCategoryRepository) {
    super(repository, ['keySubCategories']);
  }
}
