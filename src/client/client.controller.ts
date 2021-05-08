import { Controller } from '@nestjs/common';
import { GenericController } from '../generic/generic.controller';
import { Client } from './Client';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController extends GenericController<Client> {

  constructor(private service: ClientService) {
    super(service);
  }
}
