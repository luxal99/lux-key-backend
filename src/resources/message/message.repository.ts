import { EntityRepository, Repository } from 'typeorm';
import { Message } from './Message';

@EntityRepository(Message)
export class MessageRepository extends Repository<Message> {}
