import { Injectable } from "@nestjs/common";
import { PopularKeyDto } from "./models/PopularKeyDto";
import { ServiceService } from "../service/service.service";
import { EarningByKeySubCategoryDto } from "./models/EarningByKeySubCategoryDto";
import { AllTimeEarnedDto } from "./models/AllTimeEarnedDto";

@Injectable()
export class AnalyticsService {
  constructor(private serviceService: ServiceService) {
  }

  async getAllTimeEarned(): Promise<AllTimeEarnedDto> {
    return await this.serviceService.genericRepository
      .createQueryBuilder("total").select("SUM(gross) as total").getRawOne();

  }

  async getTopFivePopularKeys(): Promise<PopularKeyDto[]> {
    return await this.serviceService.genericRepository.createQueryBuilder("service")
      .leftJoinAndSelect("service.serviceKeys", "serviceKeys")
      .leftJoinAndSelect("serviceKeys.idKey", "idKey")
      .select("idKey.id, idKey.code,COUNT(idKey.code) as count")
      .groupBy("idKey.code")
      .orderBy("COUNT(idKey.id)", "DESC").getRawMany();
  }

  async getEarningByKeySubCategory(): Promise<EarningByKeySubCategoryDto[]> {
    return await this.serviceService.genericRepository.createQueryBuilder("service")
      .leftJoinAndSelect("service.serviceKeys", "serviceKeys")
      .leftJoinAndSelect("serviceKeys.idKey", "idKey")
      .leftJoinAndSelect("idKey.idKeySubCategory", "idKeySubCategory")
      .select("idKeySubCategory.name, COUNT(idKeySubCategory.id) as count,SUM(service.gross) as sum")
      .groupBy("idKeySubCategory.name")
      .orderBy("SUM(service.gross)", "DESC")
      .getRawMany();
  }

}
