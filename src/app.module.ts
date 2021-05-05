import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarBrandModule } from './car-brand/car-brand.module';
import { CarModeModule } from './car-mode/car-mode.module';
import { KeyModule } from './key/key.module';
import { KeyCategoryModule } from './key-category/key-category.module';
import { UserModule } from './user/user.module';
import { ServiceTypeModule } from './service-type/service-type.module';
import { ServiceKeyModule } from './service-key/service-key.module';
import { ServiceModule } from './service/service.module';
import { KeySubCategoryModule } from './key-sub-category/key-sub-category.module';
import { KeyPriceModule } from './key-price/key-price.module';
import { KeyModule } from './key/key.module';
import { CarModelModule } from './car-model/car-model.module';
import { CarBrandModule } from './car-brand/car-brand.module';
import { KeyPriceModule } from './key-price/key-price.module';
import { KeySubCategoryModule } from './key-sub-category/key-sub-category.module';
import { ServiceModule } from './service/service.module';
import { TestModule } from './test/test.module';
import { KeyCategoryModule } from './key-category/key-category.module';

@Module({
  imports: [CarBrandModule, CarModeModule, KeyModule, KeyCategoryModule, KeyPriceModule, KeySubCategoryModule, ServiceModule, TestModule, CarModelModule, ServiceKeyModule, ServiceTypeModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
