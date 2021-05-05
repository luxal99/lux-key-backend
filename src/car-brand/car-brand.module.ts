import { Module } from '@nestjs/common';
import { CarBrandService } from './car-brand.service';
import { CarBrandController } from './car-brand.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarBrandRepository } from './car-brand.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CarBrandRepository])],
  controllers: [CarBrandController],
  providers: [CarBrandService],
})
export class CarBrandModule {
}
