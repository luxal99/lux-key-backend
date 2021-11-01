import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageRepository } from './message.repository';
import { ClientService } from '../client/client.service';
import { ClientRepository } from '../client/client.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MessageRepository,ClientRepository])],
  controllers: [MessageController],
  providers: [MessageService,ClientService],
})
export class MessageModule {
}
