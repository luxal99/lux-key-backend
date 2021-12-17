import { Body, Controller, Get, Post, Query, Res } from "@nestjs/common";
import { ServiceService } from "./service.service";
import { GenericController } from "../generic/generic.controller";
import { Service } from "./Service";
import { Response } from "express";
import { KeyService } from "../key/key.service";
import { getRepository } from "typeorm";
import { Pagination, Sort } from "../annotations/annotations";

@Controller("service")
export class ServiceController extends GenericController<Service> {
  constructor(private readonly serviceService: ServiceService, private keyService: KeyService) {
    super(serviceService);
  }

  @Post()
  async post(@Body() entity: Service, @Res() res: Response): Promise<void> {
    try {
      if (!entity.gross && entity.idWorkService) {
        entity.gross = entity.idWorkService.price;
      }
      await this.serviceService.save(entity).then(async (savedService) => {
        if (entity.serviceKeys) {
          for (const serviceKey of savedService.serviceKeys) {
            await this.keyService.updateAmount(serviceKey.idKey.id, serviceKey.idKey);
          }
        }
        res.send(savedService);
      });
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).send({ err });
    }
  }

  @Get("")
  async getByParam(@Query() query, @Res() res: Response, @Pagination() pagination,
                   @Sort() sort): Promise<void> {
    res.send(
      await getRepository(Service).createQueryBuilder("service")
        .leftJoinAndSelect("service.serviceKeys", "serviceKeys")
        .leftJoinAndSelect("serviceKeys.idKey", "idKey")
        .leftJoinAndSelect("idKey.idCurrentPrice", "idCurrentPrice")
        .leftJoinAndSelect("idKey.carBrands", "carBrands")
        .leftJoinAndSelect("idKey.idKeySubCategory", "idKeySubCategory")
        .leftJoinAndSelect("idKeySubCategory.idKeyCategory", "idKeyCategory")
        .leftJoinAndSelect("idKey.idKeyBrand", "idKeyBrand")
        .leftJoinAndSelect("service.idWorkService", "idWorkService")
        .leftJoinAndSelect("service.idClient", "idClient")
        .where("date >= :startDate AND date <= :endDate", {
          startDate: query.startDate,
          endDate: query.endDate,
        }).getMany(),
    );
  }
}
