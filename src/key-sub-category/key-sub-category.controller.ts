import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { KeySubCategoryService } from './key-sub-category.service';
import { GenericController } from '../generic/generic.controller';
import { KeySubCategory } from './KeySubCategory';
import { Request, Response } from 'express';

@Controller('key-sub-category')
export class KeySubCategoryController extends GenericController<KeySubCategory> {
  constructor(private readonly keySubCategoryService: KeySubCategoryService) {
    super(keySubCategoryService);
  }

  @Get('by-key-category')
  async getAllKeySubCategoryByKeyCategory(
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      // @ts-ignore
      res.send(
        await this.keySubCategoryService.findByKeyCategory(
          req.query.idKeyCategory,
        ),
      );
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).send({ err });
    }
  }
}
