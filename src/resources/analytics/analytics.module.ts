import { Module } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsController } from './analytics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceRepository } from '../service/service.repository';
import { ServiceService } from '../service/service.service';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceRepository])],
  controllers: [AnalyticsController],
  providers: [AnalyticsService, ServiceService],
})
export class AnalyticsModule {}
