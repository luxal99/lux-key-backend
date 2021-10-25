import { Module } from '@nestjs/common';
import { WorkServiceService } from './work-service.service';
import { WorkServiceController } from './work-service.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkServiceRepository } from './work-service.repository';

@Module({
  imports: [TypeOrmModule.forFeature([WorkServiceRepository])],
  controllers: [WorkServiceController],
  providers: [WorkServiceService],
})
export class WorkServiceModule {
}
