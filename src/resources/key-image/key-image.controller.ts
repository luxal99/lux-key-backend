import {
  Controller,
  HttpStatus,
  Param,
  Put,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { KeyImageService } from './key-image.service';
import { GenericController } from '../../generic/generic.controller';
import { KeyImage } from './KeyImage';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { KeyService } from '../key/key.service';
import { Request, Response } from 'express';
import { Key } from '../key/Key';

@Controller('key-image')
export class KeyImageController extends GenericController<KeyImage> {
  constructor(
    private readonly keyImageService: KeyImageService,
    private keyService: KeyService,
  ) {
    super(keyImageService);
  }

  @Put('upload/:id')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: process.env.UPLOAD_PATH,
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          //Calling the callback passing the random name generated with the original extension name
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async uploadFile(
    @Req() req: Request,
    @Res() res: Response,
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: number,
  ) {
    try {
      const keyByID: Key = await this.keyService.findOne(id);
      if (keyByID.idKeyImage) {
        await this.keyImageService.deleteImage(keyByID.idKeyImage.id);
        await this.keyImageService.update(keyByID.idKeyImage.id, {
          idKey: keyByID,
          name: file.filename,
          url: `assets/img/uploads/${file.filename}`,
        });
      } else {
        this.keyImageService
          .save({
            idKey: keyByID,
            name: file.filename,
            url: `assets/img/uploads/${file.filename}`,
          })
          .then((resp) => {
            res.send(resp);
          });
      }
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).send({ err });
    }
  }
}
