import { Module } from '@nestjs/common';
import { KeyCategoryService } from './key-category.service';
import { KeyCategoryController } from './key-category.controller';

@Module({
  controllers: [KeyCategoryController],
  providers: [KeyCategoryService]
})
export class KeyCategoryModule {}
