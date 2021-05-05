import { Controller } from '@nestjs/common';
import { KeyCategoryService } from './key-category.service';

@Controller('key-category')
export class KeyCategoryController {
  constructor(private readonly keyCategoryService: KeyCategoryService) {}
}
