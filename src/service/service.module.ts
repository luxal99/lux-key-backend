import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceRepository } from './service.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceRepository])],
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule {
}
