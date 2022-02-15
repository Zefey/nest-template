import { Test, TestingModule } from '@nestjs/testing';
import { QueneController } from './quene.controller';

describe('QueneController', () => {
  let controller: QueneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueneController],
    }).compile();

    controller = module.get<QueneController>(QueneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
