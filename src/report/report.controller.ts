import { Controller, Get, HttpStatus, Query, Res } from "@nestjs/common";
import { ReportService } from "./report.service";
import { GenericController } from "../generic/generic.controller";
import { Report } from "./Report";
import { Response } from "express";
import { ReportTypeEnum } from "../enum/ReportTypeEnum.enum";

@Controller("report")
export class ReportController extends GenericController<Report> {
  constructor(private readonly reportService: ReportService) {
    super(reportService);
  }

  @Get("by-type")
  async getReportByType(
    @Query("type") reportType: ReportTypeEnum,
    @Res() res: Response,
  ) {
    try {
      const filteredReports: Report[] = await this.reportService.genericRepository.find({
        where: { reportType },
        relations: this.reportService.getRelations
      });

      res.send(filteredReports);

    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).send({ error });
    }
  }

}
