import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { KeyImage } from './KeyImage';
import { KeyImageRepository } from './key-image.repository';
import * as fs from "fs";

@Injectable()
export class KeyImageService extends GenericService<KeyImage> {

  constructor(private repository: KeyImageRepository) {
    super(repository, []);
  }

  async deleteImage(idImage: number) {
    fs.unlinkSync(process.env.DELETE_PATH + (await this.findImagePathById(idImage)));
  }

  protected async findImagePathById(idImage) {
    const image: KeyImage = await this.repository.findOne({
      where: { id: idImage },
    });
    return image.url;
  }

  async delete(id: number) {
    await this.deleteImage(id);
    await this.repository.delete(id);
  }
}
