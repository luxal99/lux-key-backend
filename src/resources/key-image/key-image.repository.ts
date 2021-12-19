import { EntityRepository, Repository } from 'typeorm';
import { KeyImage } from './KeyImage';

@EntityRepository(KeyImage)
export class KeyImageRepository extends Repository<KeyImage> {}
