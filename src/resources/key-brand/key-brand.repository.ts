import { EntityRepository, Repository } from 'typeorm';
import { KeyBrand } from './KeyBrand';

@EntityRepository(KeyBrand)
export class KeyBrandRepository extends Repository<KeyBrand> {}
