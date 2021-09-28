import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Report } from './Report';
import { ReportRepository } from './report.repository';
import * as fs from 'fs';

@Injectable()
export class ReportService extends GenericService<Report> {

  constructor(private repository: ReportRepository) {
    super(repository, []);
  }

  async delete(id: number): Promise<void> {
    const reportById: Report = await this.findOne(id);
    this.repository.delete(id).then(() => {
      fs.unlinkSync(reportById.path);
    });
  }
}
