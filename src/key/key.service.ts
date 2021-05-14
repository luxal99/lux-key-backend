import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Key } from './Key';
import { KeyRepository } from './key.repository';

@Injectable()
export class KeyService extends GenericService<Key> {

  constructor(private repository: KeyRepository) {
    super(repository, ['idKeySubCategory', 'idCurrentPrice', 'keyPrices', 'serviceKeys', 'idCarModel', 'idCarModel.idCarBrand']);
  }

  async updateAmount(id: number, key: Key): Promise<void> {
    try {
      await this.repository.update(id, { amount: key.amount - 1 });
    } catch (err) {
      throw new Error(err);
    }
  }
}
