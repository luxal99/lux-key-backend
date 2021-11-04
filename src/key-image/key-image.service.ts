import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { KeyImage } from './KeyImage';
import { KeyImageRepository } from './key-image.repository';

@Injectable()
export class KeyImageService extends GenericService<KeyImage> {

  constructor(private repository: KeyImageRepository) {
    super(repository, []);
  }
}
