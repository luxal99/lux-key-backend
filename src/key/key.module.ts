import { Module } from '@nestjs/common';
import { KeyService } from './key.service';
import { KeyController } from './key.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeyRepository } from './key.repository';
import { ReportRepository } from '../report/report.repository';
import { ReportService } from '../report/report.service';
import { KeyImageService } from '../key-image/key-image.service';
import { KeyImageRepository } from '../key-image/key-image.repository';
import { ServiceRepository } from 'src/service/service.repository';
import { ServiceService } from 'src/service/service.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      KeyRepository,
      KeyImageRepository,
      ReportRepository,
      ServiceRepository,
    ]),
  ],
  controllers: [KeyController],
  providers: [KeyService, ReportService, KeyImageService, ServiceService],
})
export class KeyModule {}
