import { Module } from '@nestjs/common';
import { KeyPriceService } from './key-price.service';
import { KeyPriceController } from './key-price.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeyPriceRepository } from './key-price.repository';

@Module({
  imports: [TypeOrmModule.forFeature([KeyPriceRepository])],
  controllers: [KeyPriceController],
  providers: [KeyPriceService],
})
export class KeyPriceModule {
}
