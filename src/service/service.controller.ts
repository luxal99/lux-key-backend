import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ServiceService } from './service.service';
import { GenericController } from '../generic/generic.controller';
import { Service } from './Service';
import { Response } from 'express';
import { KeyService } from '../key/key.service';

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
}
