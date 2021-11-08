import { Module } from "@nestjs/common";
import { ServiceService } from "./service.service";
import { ServiceController } from "./service.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServiceRepository } from "./service.repository";
import { KeyRepository } from "../key/key.repository";
import { KeyService } from "../key/key.service";
import { KeyImageRepository } from "../key-image/key-image.repository";
import { KeyImageService } from "../key-image/key-image.service";

@Module({
  imports: [TypeOrmModule.forFeature([ServiceRepository, KeyRepository, KeyImageRepository])],
  controllers: [ServiceController],
  providers: [ServiceService, KeyService, KeyImageService],
})
export class ServiceModule {
}
