import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ApiTags } from '@nestjs/swagger';

@Controller('jwt')
export class JwtController {
  @Get()
  verifyJwt(@Req() req: Request, @Res() res: Response): void {
    res.status(HttpStatus.OK).send({ message: 'Token OK!' });
  }
}
