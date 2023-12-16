import { Test, TestingModule } from '@nestjs/testing';
import { CryptumService } from './cryptum-service.service';

describe('CryptumServiceService', () => {
  let service: CryptumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CryptumService],
    }).compile();

    service = module.get<CryptumService>(CryptumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
