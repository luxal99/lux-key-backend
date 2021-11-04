import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CarBrandModule } from "./car-brand/car-brand.module";
import { KeyModule } from "./key/key.module";
import { KeyCategoryModule } from "./key-category/key-category.module";
import { KeyPriceModule } from "./key-price/key-price.module";
import { KeySubCategoryModule } from "./key-sub-category/key-sub-category.module";
import { ServiceModule } from "./service/service.module";
import { ServiceKeyModule } from "./service-key/service-key.module";
import { UserModule } from "./user/user.module";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LIST_OF_ENTITIES } from "./constant/const";
import { JWTMiddle } from "./middleware/jwt.middle";
import { JwtModule } from "./controller/jwt/jwt.module";
import { ClientModule } from "./client/client.module";
import { UserController } from "./user/user.controller";
import { CarBrandController } from "./car-brand/car-brand.controller";
import { ClientController } from "./client/client.controller";
import { KeyController } from "./key/key.controller";
import { KeyCategoryController } from "./key-category/key-category.controller";
import { KeyPriceController } from "./key-price/key-price.controller";
import { KeySubCategoryController } from "./key-sub-category/key-sub-category.controller";
import { ServiceKeyController } from "./service-key/service-key.controller";
import { ServiceController } from "./service/service.controller";
import { ReportModule } from "./report/report.module";
import { KeyBrandModule } from "./key-brand/key-brand.module";
import { WorkServiceModule } from "./work-service/work-service.module";
import { MessageModule } from "./message/message.module";
import { KeyBrandController } from "./key-brand/key-brand.controller";
import { MessageController } from "./message/message.controller";
import { KeyImageModule } from "./key-image/key-image.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: process.env.PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: true,
      logging: false,
      entities: LIST_OF_ENTITIES,
    }),
    CarBrandModule, KeyModule, JwtModule,
    KeyCategoryModule, KeyPriceModule, KeySubCategoryModule, ServiceModule
    , ServiceKeyModule, UserModule, ClientModule, ReportModule, KeyBrandModule,
    WorkServiceModule, MessageModule, KeyImageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(JWTMiddle).exclude(
      { path: "user/auth", method: RequestMethod.POST },
      { path: "jwt", method: RequestMethod.GET },
      { path: "message", method: RequestMethod.POST },
    ).forRoutes(UserController, CarBrandController,
      ClientController, KeyController, KeyCategoryController,
      KeyPriceController, KeySubCategoryController,
      ServiceKeyController, ServiceController,
      KeyBrandController,
      MessageController);
  }
}
