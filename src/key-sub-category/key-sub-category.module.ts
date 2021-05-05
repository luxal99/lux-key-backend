import { Module } from '@nestjs/common';
import { KeySubCategoryService } from './key-sub-category.service';
import { KeySubCategoryController } from './key-sub-category.controller';

@Module({
  controllers: [KeySubCategoryController],
  providers: [KeySubCategoryService]
})
export class KeySubCategoryModule {}
