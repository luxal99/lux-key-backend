import { Controller, Get, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { KeyService } from './key.service';
import { GenericController } from '../generic/generic.controller';
import { Key } from './Key';
import { Response } from 'express';
import { getRepository } from 'typeorm';
import * as excel from 'exceljs';
import * as moment from 'moment';
import { REPORT_PATH } from '../constant/const';
import { ReportService } from '../report/report.service';
import { Report } from '../report/Report';

@Controller('key')
export class KeyController extends GenericController<Key> {
  constructor(private readonly keyService: KeyService,
              private reportService: ReportService) {
    super(keyService);
  }

  @Get('critical-amount')
  async findCriticalKeyAmount(@Res() res: Response): Promise<void> {
    try {
      res.send(await getRepository(Key).createQueryBuilder('key').where('amount <= 1').getMany());
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).send({ err });
    }
  }

  @Get('search')
  async searchKey(@Query() query, @Res() res: Response): Promise<void> {
    try {
      res.send(await this.keyService.searchKey(query.search));
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).send({ err });
    }
  }

  @Post('generate')
  async generate(@Res() res: Response) {
    let response: any[] = await this.keyService.findAll();
    response = response.map((item) => ({
      code: item.code,
      amount: item.amount,
    }));
    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet('Izvestaj');

    worksheet.columns = [
      { header: 'Sifra', key: 'code', width: 10 },
      { header: 'Kolicina', key: 'amount', width: 30 },
    ];

    worksheet.addRows(JSON.parse(JSON.stringify(response)));

    const date = moment().format('DD-MM-YYYY');
    const path = REPORT_PATH + date + '.xlsx';
    workbook.xlsx.writeFile(path)
      .then(() => {
        this.reportService.save(new Report(path));
        res.sendStatus(HttpStatus.CREATED);
      });

  }
}
