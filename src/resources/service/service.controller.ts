import { Body, Controller, Get, HttpStatus, Post, Res } from "@nestjs/common";
import { ServiceService } from "./service.service";
import { GenericController } from "../../generic/generic.controller";
import { Service } from "./Service";
import { Response } from "express";
import { KeyService } from "../key/key.service";
import { DateQuery, Pagination, Sort } from "../../annotations/annotations";
import { DateDto } from "../../models/DateDto";
import { PaginationDto } from "../../models/PaginationDto";
import { SortDto } from "../../models/SortDto";
import { AllTimeEarnedDto } from "../analytics/models/AllTimeEarnedDto";
import { ServiceKeyDto } from "../../models/ServiceKeyDto";

@Controller("service")
export class ServiceController extends GenericController<Service> {
  constructor(
    private readonly serviceService: ServiceService,
    private keyService: KeyService,
  ) {
    super(serviceService);
  }

  @Post()
  async post(@Body() entity: Service, @Res() res: Response): Promise<void> {
    if (!entity.gross && entity.idWorkService) {
      entity.gross = entity.idWorkService.price;
    }

    const serviceKeysDto: ServiceKeyDto[] = [...new Map(entity.serviceKeys.map((item) => ({
      id: item.idKey.id,
      amount: item.idKey.amount,
      decrement: this.keyService.countOccurrence(item.idKey, entity.serviceKeys),
    })).map(item => [item["id"], item])).values()];

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
}
