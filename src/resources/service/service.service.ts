import { Injectable } from '@nestjs/common';
import { GenericService } from '../../generic/generic.service';
import { Service } from './Service';
import { ServiceRepository } from './service.repository';
import { Query } from '../../models/Query';
import { DateDto } from '../../models/DateDto';
import { AllTimeEarnedDto } from '../analytics/models/AllTimeEarnedDto';
import { Key } from "../key/Key";

@Injectable()
export class ServiceService extends GenericService<Service> {
  constructor(genericRepository: ServiceRepository) {
    super(genericRepository, [
      'serviceKeys',
      'idClient',
      'serviceKeys.idKey',
      'serviceKeys.idKey.idCurrentPrice',
      'serviceKeys.idKey.idKeySubCategory',
      'serviceKeys.idKey.idKeySubCategory.idKeyCategory',
      'serviceKeys.idKey.carBrands',
      'serviceKeys.idWorkService',
      'serviceKeys.idKey.idKeyBrand',
    ]);
  }

  async getServicesByQuery(query: Query): Promise<[Service[], number]> {
    return await this.genericRepository
      .createQueryBuilder('service')
      .leftJoinAndSelect('service.serviceKeys', 'serviceKeys')
      .leftJoinAndSelect('serviceKeys.idKey', 'idKey')
      .leftJoinAndSelect('idKey.idCurrentPrice', 'idCurrentPrice')
      .leftJoinAndSelect('idKey.carBrands', 'carBrands')
      .leftJoinAndSelect('idKey.idKeySubCategory', 'idKeySubCategory')
      .leftJoinAndSelect('idKeySubCategory.idKeyCategory', 'idKeyCategory')
      .leftJoinAndSelect('idKey.idKeyBrand', 'idKeyBrand')
      .leftJoinAndSelect('service.idWorkService', 'idWorkService')
      .leftJoinAndSelect('service.idClient', 'idClient')
      .take(query.pagination.rows)
      .skip(query.pagination.page * query.pagination.rows)
      .where('date >= :startDate AND date <= :endDate', {
        startDate: query.dateQuery.startDate,
        endDate: query.dateQuery.endDate,
      })
      .orderBy(query.sort.columnName, query.sort.sortType)
      .getManyAndCount();
  }

  async sumGrossByQuery(dateQuery: DateDto): Promise<AllTimeEarnedDto> {
    return await this.genericRepository
      .createQueryBuilder('total')
      .select('SUM(gross) as total')
      .where('date >= :startDate AND date <= :endDate', {
        startDate: dateQuery.startDate,
        endDate: dateQuery.endDate,
      })
      .getRawOne();
  }

}
