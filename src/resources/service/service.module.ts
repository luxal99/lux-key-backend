import { Module } from "@nestjs/common";
import { ServiceService } from "./service.service";
import { ServiceController } from "./service.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServiceRepository } from "./service.repository";
import { KeyRepository } from "../key/key.repository";
import { KeyService } from "../key/key.service";
import { KeyImageRepository } from "../key-image/key-image.repository";
import { KeyImageService } from "../key-image/key-image.service";
import { ReportRepository } from "../report/report.repository";
import { ReportService } from "../report/report.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ServiceRepository,
      KeyRepository,
      KeyImageRepository,
      ReportRepository
    ]),
  ],
  controllers: [ServiceController],
  providers: [ServiceService, KeyService, KeyImageService, ReportService],
})
export class ServiceModule {
}
