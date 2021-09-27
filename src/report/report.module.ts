import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportRepository } from './report.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ReportRepository])],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {
}
