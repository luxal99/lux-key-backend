import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Key } from './Key';
import { KeyRepository } from './key.repository';
import { Like } from 'typeorm';

@Injectable()
export class KeyService extends GenericService<Key> {

  constructor(private repository: KeyRepository) {
    super(repository, ['idKeySubCategory', 'idKeySubCategory.idKeyCategory',
      'idCurrentPrice', 'keyPrices', 'serviceKeys', 'carBrands', 'idKeyBrand']);
  }

  async updateAmount(id: number, key: Key): Promise<void> {
    try {
      await this.repository.update(id, { amount: key.amount - 1 });
    } catch (err) {
      throw new Error(err);
    }
  }

  async searchKey(searchText: string): Promise<Key[]> {
    return await this.repository.find(
      {
        where: { code: Like(`%${searchText}%`) }
        , relations: this.getRelations,
      });
  }

  async findKeysByKeySubCategory(idKeySubCategory): Promise<Key[]> {
    const arr:Key[] = await this.repository.find({ where: { idKeySubCategory }, relations: this.getRelations });
    return arr.reverse()
  }
}
