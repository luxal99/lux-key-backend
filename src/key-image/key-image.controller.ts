import { Controller } from '@nestjs/common';
import { KeyImageService } from './key-image.service';
import { GenericController } from '../generic/generic.controller';
import { KeyImage } from './KeyImage';

@Controller('key-image')
export class KeyImageController extends GenericController<KeyImage> {
  constructor(private readonly keyImageService: KeyImageService) {
    super(keyImageService);
  }
}
