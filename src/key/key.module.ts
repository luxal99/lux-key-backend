import { Module } from '@nestjs/common';
import { KeyService } from './key.service';
import { KeyController } from './key.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeyRepository } from './key.repository';
import { ReportRepository } from '../report/report.repository';
import { ReportService } from '../report/report.service';

@Module({
  imports: [TypeOrmModule.forFeature([KeyRepository, ReportRepository])],
  controllers: [KeyController],
  providers: [KeyService, ReportService],
})
export class KeyModule {
}
