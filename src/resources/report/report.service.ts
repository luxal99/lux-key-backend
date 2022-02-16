import { Injectable } from '@nestjs/common';
import { GenericService } from '../../generic/generic.service';
import { Report } from './Report';
import { ReportRepository } from './report.repository';
import * as fs from 'fs';
import * as moment from 'moment';

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

  async getReportsGroupedByMonth(): Promise<any> {
    const listOfReports: Report[] = await this.findAll();
    let groupedReports = {};
    listOfReports.forEach((value, index) => {
      if (
        moment(value.createdDate).format('MMMM') ===
          moment(listOfReports[index].createdDate).format('MMMM') &&
        moment(value.createdDate).format('YYYY') ===
          moment(listOfReports[index].createdDate).format('YYYY')
      ) {
        if (
          !groupedReports[
            `${moment(value.createdDate).format('MMMM').toLowerCase()}${moment(
              value.createdDate,
            ).format('YYYY')}`
          ]
        ) {
          groupedReports[
            `${moment(value.createdDate).format('MMMM').toLowerCase()}${moment(
              value.createdDate,
            ).format('YYYY')}`
          ] = [];
        }
        groupedReports[
          `${moment(value.createdDate).format('MMMM').toLowerCase()}${moment(
            value.createdDate,
          ).format('YYYY')}`
        ].push(value);
      } else {
        if (
          !groupedReports[
            `${moment(listOfReports[index].createdDate)
              .format('MMMM')
              .toLowerCase()}${moment(listOfReports[index].createdDate).format(
              'YYYY',
            )}`
          ]
        ) {
          groupedReports[
            `${moment(listOfReports[index].createdDate)
              .format('MMMM')
              .toLowerCase()}${moment(listOfReports[index].createdDate).format(
              'YYYY',
            )}`
          ] = [];
        }
        groupedReports[
          `${moment(listOfReports[index].createdDate)
            .format('MMMM')
            .toLowerCase()}${moment(listOfReports[index].createdDate).format(
            'YYYY',
          )}`
        ].push(listOfReports[index]);
      }
    });
    return groupedReports;
  }
}
