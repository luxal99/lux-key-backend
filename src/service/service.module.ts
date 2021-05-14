import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceRepository } from './service.repository';
import { KeyRepository } from '../key/key.repository';
import { KeyService } from '../key/key.service';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceRepository, KeyRepository])],
  controllers: [ServiceController],
  providers: [ServiceService, KeyService],
})
export class ServiceModule {
}
