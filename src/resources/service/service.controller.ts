import { Body, Controller, Get, HttpStatus, Post, Req, Res, } from "@nestjs/common";
import { ServiceService } from "./service.service";
import { GenericController } from "../../generic/generic.controller";
import { Service } from "./Service";
import { Request, Response } from "express";
import { KeyService } from "../key/key.service";
import { DateQuery, Pagination, Sort, } from "../../annotations/annotations";
import { DateDto } from "../../models/DateDto";
import { PaginationDto } from "../../models/PaginationDto";
import { SortDto } from "../../models/SortDto";
import { AllTimeEarnedDto } from "../analytics/models/AllTimeEarnedDto";
import { ServiceKeyDto } from "../../models/ServiceKeyDto";
import { BuiltInReportDto } from "../../models/BuiltInReportDto";
import * as excel from "exceljs";
import * as moment from "moment";
import { REPORT_PATH } from "../../constant/constant";
import { Report } from "../report/Report";
import { ReportTypeEnum } from "../../enum/ReportTypeEnum.enum";
import { ReportService } from "../report/report.service";

@Controller("service")
export class ServiceController extends GenericController<Service> {
  constructor(
    private readonly serviceService: ServiceService,
    private keyService: KeyService,
    private reportService: ReportService
  ) {
    super(serviceService);
  }

  @Post()
  async post(@Body() entity: Service, @Res() res: Response): Promise<void> {
    if (!entity.gross && entity.idWorkService) {
      entity.gross = entity.idWorkService.price;
    }

    let serviceKeysDto: ServiceKeyDto[] = [];
    if (!entity.idWorkService) {
      serviceKeysDto = [
        ...new Map(
          entity.serviceKeys
            .map((item) => ({
              id: item.idKey.id,
              amount: item.idKey.amount,
              decrement: this.keyService.countOccurrence(
                item.idKey,
                entity.serviceKeys,
              ),
            }))
            .map((item) => [item["id"], item]),
        ).values(),
      ];
    }

    await this.serviceService.save(entity).then(async (savedService) => {
      if (entity.serviceKeys) {
        for (const serviceKey of serviceKeysDto) {
          await this.keyService.updateAmount(serviceKey);
        }
      }
      res.send(savedService);
    });
  }

  @Get("")
  async getByParam(
    @DateQuery() dateQuery: DateDto,
    @Res() res: Response,
    @Pagination() pagination: PaginationDto,
    @Sort() sort: SortDto,
  ): Promise<void> {
    try {
      const serviceByQuery: [Service[], number] =
        await this.serviceService.getServicesByQuery({
          dateQuery,
          pagination,
          sort,
        });

      const dataCount = serviceByQuery[1];
      const sumGrossOfQuery: AllTimeEarnedDto =
        await this.serviceService.sumGrossByQuery(dateQuery);
      res.header("DATA_COUNT", JSON.stringify(dataCount));
      res.header(
        "NUMBER_OF_PAGES",
        JSON.stringify(Math.ceil(dataCount / pagination.rows)),
      );
      res.header("SUM", JSON.stringify(sumGrossOfQuery.total));
      res.send(serviceByQuery[0]);
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).send({ err });
    }
  }

  @Post("generate-built-in")
  async generateBuiltInReport(
    @Req() req: Request,
    @Res() res: Response,
    @Body() reportQuery: DateDto,
  ): Promise<void> {
    try {
      const listOfBuiltInKeys: BuiltInReportDto[] = await this.serviceService.generateBuiltInReport(reportQuery);
      let workbook = new excel.Workbook();
      let worksheet = workbook.addWorksheet("Izvestaj");

      worksheet.columns = [
        { header: "Sifra", key: "code", width: 10 },
        { header: "Nabavna cena", key: "purchase_price", width: 30 },
        { header: "Prodajna cena", key: "key_price", width: 30 },
        { header: "Ugradjeno", key: "built_in_amount", width: 30 },
        { header: "Zarađeno", key: "profit", width: 30 },
      ];

      worksheet.addRows(JSON.parse(JSON.stringify(listOfBuiltInKeys)));

      const date = moment().format("DD-MM-YYYY");
      const path = REPORT_PATH + moment(reportQuery.startDate).format("DD-MM-YYYY")+'-'+moment(reportQuery.endDate).format("DD-MM-YYYY") + "-BUILT_IN" + ".xlsx";
      workbook.xlsx.writeFile(path).then(() => {
        this.reportService.save(new Report(path, ReportTypeEnum.BUILT_IN, reportQuery.startDate, reportQuery.endDate));
        res.sendStatus(HttpStatus.OK);
      });
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).send({ err });
    }
  }
}
