import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { MessageService } from './message.service';
import { GenericController } from '../generic/generic.controller';
import { Message } from './Message';
import { Response } from 'express';
import { ClientService } from '../client/client.service';
import { Client } from '../client/Client';

@Controller('message')
export class MessageController extends GenericController<Message> {
  constructor(private readonly messageService: MessageService, private clientService: ClientService) {
    super(messageService);
  }

  @Post()
  async post(@Body() message: Message, @Res() res: Response) {
    try {
      const clientByTelephone: Client = await this.clientService.findClientByTelephone(message.idClient.telephone);
      if (clientByTelephone) {
        message.idClient = clientByTelephone;
      }

      this.messageService.save(message).then((resp) => {
        res.send(resp).status(HttpStatus.OK);
      });
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).send({ err });
    }
  }
}
