import { CarBrand } from '../resources/car-brand/CarBrand';
import { Key } from '../resources/key/Key';
import { KeyCategory } from '../resources/key-category/KeyCategory';
import { KeySubCategory } from '../resources/key-sub-category/KeySubCategory';
import { KeyPrice } from '../resources/key-price/KeyPrice';
import { Service } from '../resources/service/Service';
import { ServiceKey } from '../resources/service-key/ServiceKey';
import { User } from '../resources/user/User';
import { Client } from '../resources/client/Client';
import { Report } from '../resources/report/Report';
import { KeyBrand } from '../resources/key-brand/KeyBrand';
import { WorkService } from '../resources/work-service/WorkService';
import { Message } from '../resources/message/Message';
import { KeyImage } from '../resources/key-image/KeyImage';
import { ConfigModule } from '@nestjs/config';

export const LIST_OF_ENTITIES = [
  CarBrand,
  Key,
  KeyCategory,
  KeySubCategory,
  Client,
  KeyPrice,
  Service,
  ServiceKey,
  User,
  Report,
  KeyBrand,
  WorkService,
  Message,
  KeyImage,
];
export const PASSWORD_REGEX = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$';
export const TOKEN_NAME = 'Authorization';

export class JWTMessage {
  static ACCESS_DENIED_MESSAGE = 'Pristup odbijen';
  static INVALID_TOKEN_MESSAGE = 'Nevalidan token';
}

export class RestRoutes {
  static PREFIX = '/lux/';
  static JWT = '/jwt';
}

export const REPORT_PATH =
  '/home/luxal/PC/Project/LuxKey/lux-key-frontend/src/assets/reports/';
export const CONFIG = ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: 'src/environments/.development.env',
});
