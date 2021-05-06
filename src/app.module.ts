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
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LIST_OF_ENTITIES } from './constant/const';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: true,
      logging: false,
      entities: LIST_OF_ENTITIES,
    }),
    CarBrandModule, CarModelModule, KeyModule,
    KeyCategoryModule, KeyPriceModule, KeySubCategoryModule, ServiceModule
    , CarModelModule, ServiceKeyModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
