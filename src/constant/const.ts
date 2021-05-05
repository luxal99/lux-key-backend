import { CarModel } from '../car-model/CarModel';
import { CarBrand } from '../car-brand/CarBrand';
import { Key } from '../key/Key';
import { KeyCategory } from '../key-category/KeyCategory';
import { KeySubCategory } from '../key-sub-category/KeySubCategory';
import { KeyPrice } from '../key-price/KeyPrice';
import { Service } from '../service/Service';
import { ServiceKey } from '../service-key/ServiceKey';
import { ServiceType } from '../service-type/ServiceType';
import { User } from '../user/User';

export const LIST_OF_ENTITIES = [
  CarModel, CarBrand,
  Key, KeyCategory,
  KeySubCategory, KeyPrice,
  Service, ServiceKey,
  ServiceType, User
];
