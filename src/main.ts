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
import { ServiceType } from './enum/ServiceType';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Lux key API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    extraModels:
      [
        CarBrand, CarModel, Key, KeyCategory, KeySubCategory
        , KeyPrice, KeySubCategory, Service, ServiceKey],
  });
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT);
}

bootstrap();
