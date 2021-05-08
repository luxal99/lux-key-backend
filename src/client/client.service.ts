import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Client } from './Client';
import { ClientRepository } from './client.repository';

@Injectable()
export class ClientService extends GenericService<Client>{

  constructor(repository:ClientRepository) {
    super(repository, ['services']);
  }
}
