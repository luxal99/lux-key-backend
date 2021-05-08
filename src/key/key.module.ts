import { Module } from '@nestjs/common';
import { KeyService } from './key.service';
import { KeyController } from './key.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeyRepository } from './key.repository';

@Module({
  imports: [TypeOrmModule.forFeature([KeyRepository])],
  controllers: [KeyController],
  providers: [KeyService],
})
export class KeyModule {
}
