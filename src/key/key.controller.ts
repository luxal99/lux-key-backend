import { Controller } from '@nestjs/common';
import { KeyService } from './key.service';

@Controller('key')
export class KeyController {
  constructor(private readonly keyService: KeyService) {}
}