import { EntityRepository, Repository } from 'typeorm';
import { KeyCategory } from './KeyCategory';

@EntityRepository(KeyCategory)
export class KeyCategoryRepository extends Repository<KeyCategory> {}
