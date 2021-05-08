import { Controller } from '@nestjs/common';
import { KeyService } from './key.service';
import { GenericController } from '../generic/generic.controller';
import { Key } from './Key';

@Controller('key')
export class KeyController extends GenericController<Key> {
  constructor(private readonly keyService: KeyService) {
    super(keyService);
  }
}
