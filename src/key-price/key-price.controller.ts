import { Controller } from '@nestjs/common';
import { KeyPriceService } from './key-price.service';

@Controller('key-price')
export class KeyPriceController {
  constructor(private readonly keyPriceService: KeyPriceService) {}
}
