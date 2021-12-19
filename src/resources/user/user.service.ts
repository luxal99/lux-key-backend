import { Injectable } from '@nestjs/common';
import { User } from './User';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private repository: UserRepository) {}

  async findUserByUsername(username: string): Promise<User> {
    return this.repository.findOne({
      where: { username },
    });
  }

  async createUser(entity: User): Promise<User> {
    return await this.repository.save(entity);
  }
}
