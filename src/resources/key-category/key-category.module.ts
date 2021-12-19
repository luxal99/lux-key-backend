import { Module } from '@nestjs/common';
import { KeyCategoryService } from './key-category.service';
import { KeyCategoryController } from './key-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeyCategoryRepository } from './key-category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([KeyCategoryRepository])],
  controllers: [KeyCategoryController],
  providers: [KeyCategoryService],
})
export class KeyCategoryModule {}
