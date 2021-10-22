import { Module } from '@nestjs/common';
import { WorkServiceController } from './work-service.controller';
import { WorkServiceService } from './work-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkServiceRepository } from './work-service.repository';

@Module({
  imports: [TypeOrmModule.forFeature([WorkServiceRepository])],
  controllers: [WorkServiceController],
  providers: [WorkServiceService],
})
export class WorkServiceModule {
}
