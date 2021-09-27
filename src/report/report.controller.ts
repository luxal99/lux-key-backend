import { Controller } from '@nestjs/common';
import { ReportService } from './report.service';
import { GenericController } from '../generic/generic.controller';
import { Report } from './Report';

@Controller('report')
export class ReportController extends GenericController<Report> {
  constructor(private readonly reportService: ReportService) {
    super(reportService);
  }
}
