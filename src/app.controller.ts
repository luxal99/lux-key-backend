import { Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { getManager } from 'typeorm';
import * as excel from 'exceljs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

}
