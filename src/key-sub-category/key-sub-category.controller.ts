import { Controller } from '@nestjs/common';
import { KeySubCategoryService } from './key-sub-category.service';
import { GenericController } from '../generic/generic.controller';
import { KeySubCategory } from './KeySubCategory';

@Controller('key-sub-category')
export class KeySubCategoryController extends GenericController<KeySubCategory> {
  constructor(private readonly keySubCategoryService: KeySubCategoryService) {
    super(keySubCategoryService);
  }
}
