import { EntityRepository, Repository } from 'typeorm';
import { KeySubCategory } from './KeySubCategory';

@EntityRepository(KeySubCategory)
export class KeySubCategoryRepository extends Repository<KeySubCategory> {

}
