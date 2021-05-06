import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './User';
import { Response } from 'express';
import { PASSWORD_REGEX } from '../constant/const';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {
  }

  @Post('auth')
  private auth(@Body() user: User, @Res() resp: Response): void {
    try {
      this.userService.findUserByUsername(user.username).then(async (userByID) => {
        if (!userByID) {
          resp.status(HttpStatus.NOT_FOUND).send({ message: 'Korisnik nije pronađen' });
        } else {
          const isPasswordValid = await bcrypt.compare(user.password, userByID.password);
          if (isPasswordValid) {
            const token = jwt.sign({ username: userByID.username }, process.env.SECRET, { expiresIn: 60 * 60 * 3 });
            resp.send(token);
          } else {
            resp.status(HttpStatus.FORBIDDEN).send({ message: 'Šifra nije validna' });
          }
        }
      });
    } catch (err) {
      resp.status(HttpStatus.BAD_REQUEST).send({ err });
    }
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
