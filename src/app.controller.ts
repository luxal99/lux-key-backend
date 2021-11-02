import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

const Instagram = require('instagram-web-api');

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {
  }


}
