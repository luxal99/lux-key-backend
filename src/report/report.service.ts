import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Report } from './Report';
import { ReportRepository } from './report.repository';

@Injectable()
export class ReportService extends GenericService<Report>{

  constructor(repository:ReportRepository) {
    super(repository, []);
  }
}
