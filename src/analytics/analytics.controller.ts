import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { AnalyticsService } from "./analytics.service";
import { Response } from "express";

@Controller("analytics")
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {
  }

  @Get("all-time-earned")
  async getAllTimeEarned(@Res() res: Response) {
    try {
      res.send(await this.analyticsService.getAllTimeEarned());
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).send({ err });
    }
  }

  @Get("earning-by-key-sub-category")
  async getEarningByKeySubCategory(@Res() res: Response) {
    try {
      res.send(await this.analyticsService.getEarningByKeySubCategory());
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).send({ err });
    }
  }

  @Get("top-five")
  async getTopFivePopularKeys(@Res() res: Response) {
    try {
      res.send(await this.analyticsService.getTopFivePopularKeys());
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).send({ err });
    }
  }
}
