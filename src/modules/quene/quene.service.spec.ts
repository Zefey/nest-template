import { Test, TestingModule } from '@nestjs/testing';
import { QueneService } from './quene.service';

describe('QueneService', () => {
  let service: QueneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueneService],
    }).compile();

    service = module.get<QueneService>(QueneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
