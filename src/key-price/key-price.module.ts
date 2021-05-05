import { Module } from '@nestjs/common';
import { KeyPriceService } from './key-price.service';
import { KeyPriceController } from './key-price.controller';

@Module({
  controllers: [KeyPriceController],
  providers: [KeyPriceService]
})
export class KeyPriceModule {}
