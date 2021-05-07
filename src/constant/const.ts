import { CarModel } from '../car-model/CarModel';
import { CarBrand } from '../car-brand/CarBrand';
import { Key } from '../key/Key';
import { KeyCategory } from '../key-category/KeyCategory';
import { KeySubCategory } from '../key-sub-category/KeySubCategory';
import { KeyPrice } from '../key-price/KeyPrice';
import { Service } from '../service/Service';
import { ServiceKey } from '../service-key/ServiceKey';
import { User } from '../user/User';

export const LIST_OF_ENTITIES = [
  CarModel, CarBrand,
  Key, KeyCategory,
  KeySubCategory, KeyPrice,
  Service, ServiceKey, User,
];
export const PASSWORD_REGEX = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$';
export const TOKEN_NAME = 'Authorization';

export class Message {
  static ACCESS_DENIED_MESSAGE = 'Pristup odbijen';
  static INVALID_TOKEN_MESSAGE = 'Nevalidan token';
}

export class RestRoutes {
  static PREFIX = '/lux/';
  static JWT = '/jwt';
}
