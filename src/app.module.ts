import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarBrandModule } from './car-brand/car-brand.module';
import { CarModelModule } from './car-model/car-model.module';
import { KeyModule } from './key/key.module';
import { KeyCategoryModule } from './key-category/key-category.module';
import { KeyPriceModule } from './key-price/key-price.module';
import { KeySubCategoryModule } from './key-sub-category/key-sub-category.module';
import { ServiceModule } from './service/service.module';
import { ServiceKeyModule } from './service-key/service-key.module';
import { ServiceTypeModule } from './service-type/service-type.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [CarBrandModule, CarModelModule, KeyModule,
    KeyCategoryModule, KeyPriceModule, KeySubCategoryModule, ServiceModule
    , CarModelModule, ServiceKeyModule, ServiceTypeModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
