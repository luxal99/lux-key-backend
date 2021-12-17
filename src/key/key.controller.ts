import {
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { KeyService } from './key.service';
import { GenericController } from '../generic/generic.controller';
import { Key } from './Key';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as excel from 'exceljs';
import * as moment from 'moment';
import { REPORT_PATH } from '../constant/constant';
import { ReportService } from '../report/report.service';
import { Report } from '../report/Report';
import { ServiceService } from 'src/service/service.service';
import { ReportTypeEnum } from 'src/enum/ReportTypeEnum.enum';

@Controller('key')
export class KeyController extends GenericController<Key> {
  constructor(
    private readonly keyService: KeyService,
    private reportService: ReportService,
    private serviceService: ServiceService,
  ) {
    super(keyService);
  }

  @Get('critical-amount')
  async findCriticalKeyAmount(@Res() res: Response): Promise<void> {
    try {
      res.send(
        await getRepository(Key)
          .createQueryBuilder('key')
          .where('amount <= 1')
          .getMany(),
      );
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
    const path = REPORT_PATH + date + '-IN_STOCK' + '.xlsx';
    workbook.xlsx.writeFile(path).then(() => {
      this.reportService.save(new Report(path, ReportTypeEnum.IN_STOCK));
      res.sendStatus(HttpStatus.CREATED);
    });
  }

  @Post('generate-key-service-count-status')
  async generateKeyServiceCountStatus(@Res() res: Response) {
    let response: any[] = await this.serviceService.genericRepository
      .createQueryBuilder('service')
      .leftJoinAndSelect('service.serviceKeys', 'serviceKeys')
      .leftJoinAndSelect('serviceKeys.idKey', 'idKey')
      .select('idKey.id, idKey.code,COUNT(idKey.code) as amount')
      .groupBy('idKey.code')
      .orderBy('COUNT(idKey.id)', 'DESC')
      .getRawMany();
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
    const path = REPORT_PATH + date + '-BUILT_IN' + '.xlsx';
    workbook.xlsx.writeFile(path).then(() => {
      this.reportService.save(new Report(path, ReportTypeEnum.BUILT_IN));
      res.sendStatus(HttpStatus.CREATED);
    });
  }

  @Get('by-key-sub-category')
  async getAllKeySubCategoryByKeyCategory(
    @Req() req: Request,
    @Res() res: Response,
  ) {
    // @ts-ignore
    res.send(
      await this.keyService.findKeysByKeySubCategory(
        //@ts-ignore
        Number.parseInt(req.query.idKeySubCategory),
      ),
    );
  }
}
