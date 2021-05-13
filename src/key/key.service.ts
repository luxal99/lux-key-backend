import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Key } from './Key';
import { KeyRepository } from './key.repository';

@Injectable()
export class KeyService extends GenericService<Key> {

  constructor(private repository: KeyRepository) {
    super(repository, ['idKeySubCategory', 'idCurrentPrice', 'keyPrices', 'serviceKeys', 'idCarModel', 'idCarModel.idCarBrand']);
  }
}
