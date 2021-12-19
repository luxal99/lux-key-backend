import { EntityRepository, Repository } from 'typeorm';
import { KeyPrice } from './KeyPrice';

@EntityRepository(KeyPrice)
export class KeyPriceRepository extends Repository<KeyPrice> {}
