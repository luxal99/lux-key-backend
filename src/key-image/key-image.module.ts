import { Module } from '@nestjs/common';
import { KeyImageService } from './key-image.service';
import { KeyImageController } from './key-image.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeyImageRepository } from './key-image.repository';

@Module({
  imports: [TypeOrmModule.forFeature([KeyImageRepository])],
  controllers: [KeyImageController],
  providers: [KeyImageService],
})
export class KeyImageModule {
}
