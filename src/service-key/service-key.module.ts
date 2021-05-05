import { Module } from '@nestjs/common';
import { ServiceKeyService } from './service-key.service';
import { ServiceKeyController } from './service-key.controller';

@Module({
  controllers: [ServiceKeyController],
  providers: [ServiceKeyService]
})
export class ServiceKeyModule {}
