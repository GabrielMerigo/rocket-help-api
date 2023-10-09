import { Test } from '@nestjs/testing';
import { SolicitationController } from './solicitation.controller';
import { SolicitationService } from './solicitation.service';

describe('SolicitationController', () => {
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitationController],
      providers: [SolicitationService],
    }).compile();
  });
});
