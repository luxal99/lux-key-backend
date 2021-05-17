import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { KeyService } from './key.service';
import { GenericController } from '../generic/generic.controller';
import { Key } from './Key';
import { Response } from 'express';
import {  getRepository } from 'typeorm';

@Controller('key')
export class KeyController extends GenericController<Key> {
  constructor(private readonly keyService: KeyService) {
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
}
