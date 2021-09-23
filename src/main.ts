import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Service } from './service/Service';
import { Key } from './key/Key';
import { CarBrand } from './car-brand/CarBrand';
import { CarModel } from './car-model/CarModel';
import { KeyCategory } from './key-category/KeyCategory';
import { KeySubCategory } from './key-sub-category/KeySubCategory';
import { KeyPrice } from './key-price/KeyPrice';
import { ServiceKey } from './service-key/ServiceKey';
import { Client } from './client/Client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}

bootstrap();
