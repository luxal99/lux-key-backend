import { EntityRepository, Repository } from 'typeorm';
import { Key } from './Key';

@EntityRepository(Key)
export class KeyRepository extends Repository<Key> {
}
