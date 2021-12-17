import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { JWTMessage, TOKEN_NAME } from '../constant/constant';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JWTMiddle implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.header(TOKEN_NAME);

    if (!token)
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .send({ message: JWTMessage.ACCESS_DENIED_MESSAGE });

    try {
      jwt.verify(token, process.env.SECRET);
      next();
    } catch (e) {
      res
        .status(HttpStatus.UNAUTHORIZED)
        .send({ message: JWTMessage.INVALID_TOKEN_MESSAGE });
    }
  }
}
