import { Module } from '@nestjs/common';
import { KeyBrandService } from './key-brand.service';
import { KeyBrandController } from './key-brand.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeyBrandRepository } from './key-brand.repository';

@Module({
  imports: [TypeOrmModule.forFeature([KeyBrandRepository])],
  controllers: [KeyBrandController],
  providers: [KeyBrandService],
})
export class KeyBrandModule {}
