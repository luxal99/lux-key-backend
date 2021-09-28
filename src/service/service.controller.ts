import { Body, Controller, Get, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { ServiceService } from './service.service';
import { GenericController } from '../generic/generic.controller';
import { Service } from './Service';
import { Response } from 'express';
import { KeyService } from '../key/key.service';
import { EntityManager, getConnection, getManager, getRepository, In, LessThan, MoreThan } from 'typeorm';
import { Raw } from 'typeorm/browser';

@Controller('service')
export class ServiceController extends GenericController<Service> {
  constructor(private readonly serviceService: ServiceService, private keyService: KeyService) {
    super(serviceService);
  }

  @Post()
  async post(@Body() entity: Service, @Res() res: Response): Promise<void> {
    try {
      await this.serviceService.save(entity).then(async (savedService) => {
        for (const serviceKey of savedService.serviceKeys) {
          await this.keyService.updateAmount(serviceKey.idKey.id, serviceKey.idKey);
        }
        res.send(savedService);
      });
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).send({ err });
    }
  }

  @Get('')
  async getByParam(@Query() query, @Res() res: Response): Promise<void> {
    res.send(
      await getRepository(Service).createQueryBuilder('service')
        .leftJoinAndSelect('service.serviceKeys', 'serviceKeys')
        .leftJoinAndSelect('serviceKeys.idKey', 'idKey')
        .leftJoinAndSelect('idKey.idCurrentPrice', 'idCurrentPrice')
        .leftJoinAndSelect('idKey.carBrands', 'carBrands')
        .leftJoinAndSelect('service.idClient', 'idClient')
        .where('date >= :startDate AND date <= :endDate', {
          startDate: query.startDate,
          endDate: query.endDate,
        }).getMany(),
    );
  }
}
