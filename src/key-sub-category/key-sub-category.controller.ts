import { Controller } from '@nestjs/common';
import { KeySubCategoryService } from './key-sub-category.service';

@Controller('key-sub-category')
export class KeySubCategoryController {
  constructor(private readonly keySubCategoryService: KeySubCategoryService) {}
}
