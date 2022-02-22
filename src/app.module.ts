import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarBrandModule } from './resources/car-brand/car-brand.module';
import { KeyModule } from './resources/key/key.module';
import { KeyCategoryModule } from './resources/key-category/key-category.module';
import { KeyPriceModule } from './resources/key-price/key-price.module';
import { KeySubCategoryModule } from './resources/key-sub-category/key-sub-category.module';
import { ServiceModule } from './resources/service/service.module';
import { ServiceKeyModule } from './resources/service-key/service-key.module';
import { UserModule } from './resources/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LIST_OF_ENTITIES } from './constant/constant';
import { JWTMiddle } from './middleware/jwt.middle';
import { ClientModule } from './resources/client/client.module';
import { UserController } from './resources/user/user.controller';
import { CarBrandController } from './resources/car-brand/car-brand.controller';
import { ClientController } from './resources/client/client.controller';
import { KeyController } from './resources/key/key.controller';
import { KeyCategoryController } from './resources/key-category/key-category.controller';
import { KeyPriceController } from './resources/key-price/key-price.controller';
import { KeySubCategoryController } from './resources/key-sub-category/key-sub-category.controller';
import { ServiceKeyController } from './resources/service-key/service-key.controller';
import { ServiceController } from './resources/service/service.controller';
import { ReportModule } from './resources/report/report.module';
import { KeyBrandModule } from './resources/key-brand/key-brand.module';
import { WorkServiceModule } from './resources/work-service/work-service.module';
import { MessageModule } from './resources/message/message.module';
import { KeyBrandController } from './resources/key-brand/key-brand.controller';
import { MessageController } from './resources/message/message.controller';
import { KeyImageModule } from './resources/key-image/key-image.module';
import { AnalyticsModule } from './resources/analytics/analytics.module';
import { AnalyticsController } from './resources/analytics/analytics.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: process.env.PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: true,
      logging: false,
      entities: LIST_OF_ENTITIES,
    }),
    CarBrandModule,
    KeyModule,
    KeyCategoryModule,
    KeyPriceModule,
    KeySubCategoryModule,
    ServiceModule,
    ServiceKeyModule,
    UserModule,
    ClientModule,
    ReportModule,
    KeyBrandModule,
    WorkServiceModule,
    MessageModule,
    KeyImageModule,
    AnalyticsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(JWTMiddle)
      .exclude(
        { path: 'user/auth', method: RequestMethod.POST },
        { path: 'jwt', method: RequestMethod.GET },
        { path: 'message', method: RequestMethod.POST },
      )
      .forRoutes(
        AnalyticsController,
        UserController,
        CarBrandController,
        ClientController,
        KeyController,
        KeyCategoryController,
        KeyPriceController,
        KeySubCategoryController,
        ServiceKeyController,
        ServiceController,
        KeyBrandController,
        MessageController,
      );
  }
}
