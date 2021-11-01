import { Controller } from '@nestjs/common';
import { MessageService } from './message.service';
import { GenericController } from '../generic/generic.controller';
import { Message } from './Message';

@Controller('message')
export class MessageController extends GenericController<Message> {
  constructor(private readonly messageService: MessageService) {
    super(messageService);
  }
}
