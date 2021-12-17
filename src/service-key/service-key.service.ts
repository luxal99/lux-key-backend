import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { ServiceKey } from './ServiceKey';
import { ServiceKeyRepository } from './service-key.repository';
import { Service } from '../service/Service';

@Injectable()
export class ServiceKeyService extends GenericService<ServiceKey> {
  constructor(genericRepository: ServiceKeyRepository) {
    super(genericRepository, ['idKey', 'idKey.idCurrentPrice']);
  }

  // async getServiceByDate(query: any): Promise<[Service[], number]> {
  //   const serviceByQuery: [Service[], number] = await this.genericRepository.createQueryBuilder("service")
  //     .leftJoinAndSelect("service.serviceKeys", "serviceKeys")
  //     .leftJoinAndSelect("serviceKeys.idKey", "idKey")
  //     .leftJoinAndSelect("idKey.idCurrentPrice", "idCurrentPrice")
  //     .leftJoinAndSelect("idKey.carBrands", "carBrands")
  //     .leftJoinAndSelect("idKey.idKeySubCategory", "idKeySubCategory")
  //     .leftJoinAndSelect("idKeySubCategory.idKeyCategory", "idKeyCategory")
  //     .leftJoinAndSelect("idKey.idKeyBrand", "idKeyBrand")
  //     .leftJoinAndSelect("service.idWorkService", "idWorkService")
  //     .leftJoinAndSelect("service.idClient", "idClient")
  //     .where("date >= :startDate AND date <= :endDate", {
  //       startDate: query.startDate,
  //       endDate: query.endDate,
  //     }).getManyAndCount();
  // }
}
