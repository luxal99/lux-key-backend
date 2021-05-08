import { Module } from '@nestjs/common';
import { KeySubCategoryService } from './key-sub-category.service';
import { KeySubCategoryController } from './key-sub-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeySubCategoryRepository } from './key-sub-category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([KeySubCategoryRepository])],
  controllers: [KeySubCategoryController],
  providers: [KeySubCategoryService],
})
export class KeySubCategoryModule {
}
