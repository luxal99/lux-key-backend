import { CarBrand } from '../car-brand/CarBrand';
import { Key } from '../key/Key';
import { KeyCategory } from '../key-category/KeyCategory';
import { KeySubCategory } from '../key-sub-category/KeySubCategory';
import { KeyPrice } from '../key-price/KeyPrice';
import { Service } from '../service/Service';
import { ServiceKey } from '../service-key/ServiceKey';
import { User } from '../user/User';
import { Client } from '../client/Client';
import { Report } from '../report/Report';
import { KeyBrand } from '../key-brand/KeyBrand';
import { WorkService } from '../work-service/WorkService';
import { Message } from '../message/Message';

export const LIST_OF_ENTITIES = [
  CarBrand,
  Key, KeyCategory,
  KeySubCategory, Client, KeyPrice,
  Service, ServiceKey, User, Report,
  KeyBrand, WorkService, Message,
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

export const REPORT_PATH = '/home/luxal/PC/Project/LuxKey/lux-key-frontend/src/assets/reports/';
