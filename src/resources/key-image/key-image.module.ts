import { Module } from '@nestjs/common';
import { KeyImageService } from './key-image.service';
import { KeyImageController } from './key-image.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeyImageRepository } from './key-image.repository';
import { KeyService } from '../key/key.service';
import { KeyRepository } from '../key/key.repository';

@Module({
  imports: [TypeOrmModule.forFeature([KeyImageRepository, KeyRepository])],
  controllers: [KeyImageController],
  providers: [KeyImageService, KeyService],
})
export class KeyImageModule {}
