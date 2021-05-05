import { Test, TestingModule } from '@nestjs/testing';
import { ServiceKeyService } from './service-key.service';

describe('ServiceKeyService', () => {
  let service: ServiceKeyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceKeyService],
    }).compile();

    service = module.get<ServiceKeyService>(ServiceKeyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
