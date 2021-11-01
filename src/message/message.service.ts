import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Message } from './Message';
import { MessageRepository } from './message.repository';

@Injectable()
export class MessageService extends GenericService<Message> {

  constructor(private repository: MessageRepository) {
    super(repository, []);
  }

}
