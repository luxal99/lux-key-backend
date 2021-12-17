import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Client } from './Client';
import { ClientRepository } from './client.repository';

@Injectable()
export class ClientService extends GenericService<Client> {
  constructor(private repository: ClientRepository) {
    super(repository, ['services']);
  }

  async findClientByTelephone(telephone: string): Promise<Client> {
    return await this.repository.findOne({ where: { telephone } });
  }
}
