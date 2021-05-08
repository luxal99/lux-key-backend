import { Controller } from '@nestjs/common';
import { KeyPriceService } from './key-price.service';
import { GenericController } from '../generic/generic.controller';
import { KeyPrice } from './KeyPrice';

@Controller('key-price')
export class KeyPriceController extends GenericController<KeyPrice> {
  constructor(private readonly keyPriceService: KeyPriceService) {
    super(keyPriceService);
  }
}
