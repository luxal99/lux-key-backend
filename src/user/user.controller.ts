import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './User';
import { Response } from 'express';
import { PASSWORD_REGEX } from '../constant/const';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post()
  private async createUser(@Body() user: User, @Res() resp: Response): Promise<void> {
    try {
      if (user.password.match(PASSWORD_REGEX)) {
        user.password = await bcrypt.hash(user.password, 10);
        this.userService.createUser(user).then((createdUser) => {
          resp.send(createdUser);
        });
      } else {
        resp.status(HttpStatus.NOT_ACCEPTABLE).send({ message: 'Šifra ne ispunjava uslove' });
      }
    } catch (err) {
      resp.status(HttpStatus.BAD_REQUEST).send({ err });
    }
  }
}
