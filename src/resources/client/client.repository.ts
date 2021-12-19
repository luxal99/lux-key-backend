import { EntityRepository, Repository } from 'typeorm';
import { Client } from './Client';

@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {}
