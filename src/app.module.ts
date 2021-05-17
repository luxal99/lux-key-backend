import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
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
import { LIST_OF_ENTITIES, RestRoutes } from './constant/const';
import { JWTMiddle } from './middleware/jwt.middle';
import { JwtModule } from './controller/jwt/jwt.module';
import { ClientModule } from './client/client.module';
import { CarBrandController } from './car-brand/car-brand.controller';
import { CarModelController } from './car-model/car-model.controller';
import { ClientController } from './client/client.controller';
import { KeyController } from './key/key.controller';
import { KeyPriceController } from './key-price/key-price.controller';
import { ServiceKeyController } from './service-key/service-key.controller';
import { ServiceController } from './service/service.controller';
import { UserController } from './user/user.controller';

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
    CarBrandModule, CarModelModule, KeyModule, JwtModule,
    KeyCategoryModule, KeyPriceModule, KeySubCategoryModule, ServiceModule
    , CarModelModule, ServiceKeyModule, UserModule, ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(JWTMiddle).forRoutes({ method: RequestMethod.GET, path: RestRoutes.JWT });
    consumer.apply(JWTMiddle).exclude({ path: '/lux/user/auth', method: RequestMethod.POST })
      .forRoutes('*');
  }
}
