import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Key } from './Key';
import { KeyRepository } from './key.repository';
import { Like } from 'typeorm';
import { KeyImageService } from '../key-image/key-image.service';

@Injectable()
export class KeyService extends GenericService<Key> {
  constructor(
    private repository: KeyRepository,
    private keyImageService: KeyImageService,
  ) {
    super(repository, [
      'idKeySubCategory',
      'idKeySubCategory.idKeyCategory',
      'idCurrentPrice',
      'keyPrices',
      'serviceKeys',
      'carBrands',
      'idKeyBrand',
      'idKeyImage',
    ]);
  }

  async updateAmount(id: number, key: Key): Promise<void> {
    try {
      await this.repository.update(id, { amount: key.amount - 1 });
    } catch (err) {
      throw new Error(err);
    }
  }

  async searchKey(searchText: string): Promise<Key[]> {
    return await this.repository.find({
      where: { code: Like(`%${searchText}%`) },
      relations: this.getRelations,
    });
  }

  async delete(id: number): Promise<void> {
    const key: Key = await this.findOne(id);
    await super.delete(id);
    await this.keyImageService.delete(key.idKeyImage.id);
  }

  async findKeysByKeySubCategory(idKeySubCategory: number): Promise<Key[]> {
    const arr: Key[] = await this.repository.find({
      where: { idKeySubCategory },
      relations: this.getRelations,
    });
    return arr.reverse();
  }
}
