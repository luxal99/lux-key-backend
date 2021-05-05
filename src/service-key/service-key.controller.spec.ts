import { Test, TestingModule } from '@nestjs/testing';
import { ServiceKeyController } from './service-key.controller';
import { ServiceKeyService } from './service-key.service';

describe('ServiceKeyController', () => {
  let controller: ServiceKeyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceKeyController],
      providers: [ServiceKeyService],
    }).compile();

    controller = module.get<ServiceKeyController>(ServiceKeyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
