import { Module } from '@nestjs/common';
import { CarModelService } from './car-model.service';
import { CarModelController } from './car-model.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModelRepository } from './car-model.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CarModelRepository])],
  controllers: [CarModelController],
  providers: [CarModelService],
})
export class CarModelModule {
}
