import { Controller } from '@nestjs/common';
import { KeyCategoryService } from './key-category.service';
import { GenericController } from '../../generic/generic.controller';
import { KeyCategory } from './KeyCategory';

@Controller('key-category')
export class KeyCategoryController extends GenericController<KeyCategory> {
  constructor(private readonly service: KeyCategoryService) {
    super(service);
  }
}
