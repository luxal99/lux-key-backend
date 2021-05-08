import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { KeyPrice } from './KeyPrice';
import { KeyPriceRepository } from './key-price.repository';

@Injectable()
export class KeyPriceService extends GenericService<KeyPrice> {

  constructor(private repository: KeyPriceRepository) {
    super(repository, []);
  }
}
