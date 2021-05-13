import { Module } from '@nestjs/common';
import { ServiceKeyService } from './service-key.service';
import { ServiceKeyController } from './service-key.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceKeyRepository } from './service-key.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceKeyRepository])],
  controllers: [ServiceKeyController],
  providers: [ServiceKeyService],
})
export class ServiceKeyModule {
}
