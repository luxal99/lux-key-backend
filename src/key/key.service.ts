import { Injectable } from "@nestjs/common";
import { GenericService } from "../generic/generic.service";
import { Key } from "./Key";
import { KeyRepository } from "./key.repository";
import { Like } from "typeorm";
import { KeyImageService } from "../key-image/key-image.service";
import { ServiceKeyDto } from "src/models/ServiceKeyDto";
import { ServiceKey } from "../service-key/ServiceKey";

@Injectable()
export class KeyService extends GenericService<Key> {
  constructor(
    private repository: KeyRepository,
    private keyImageService: KeyImageService,
  ) {
    super(repository, [
      "idKeySubCategory",
      "idKeySubCategory.idKeyCategory",
      "idCurrentPrice",
      "keyPrices",
      "serviceKeys",
      "carBrands",
      "idKeyBrand",
      "idKeyImage",
    ]);
  }

  async updateAmount(serviceKeyDto: ServiceKeyDto): Promise<void> {
    try {
      await this.repository.update(serviceKeyDto.id, { amount: serviceKeyDto.amount - serviceKeyDto.decrement });
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

  countOccurrence(key: Key, listOfKeys: ServiceKey[]): number {
    return listOfKeys.filter((item) => item.idKey.id === key.id).length;
  }
}
