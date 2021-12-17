import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientRepository } from './client.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ClientRepository])],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
