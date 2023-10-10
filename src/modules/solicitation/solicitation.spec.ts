import { Test, TestingModule } from '@nestjs/testing';
import { SolicitationController } from './solicitation.controller';
import {
  canActivate,
  solicitationServiceMock,
} from 'src/mocks/solicitation.mock';
import { AuthGuard } from 'src/guards/auth.guard';
import { SolicitationService } from './solicitation.service';

describe('SolicitationController', () => {
  let solicitationController: SolicitationController;
  let solicitationService: SolicitationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitationController],
      providers: [solicitationServiceMock],
    })
      .overrideGuard(AuthGuard)
      .useValue(canActivate)
      .compile();

    solicitationController = module.get<SolicitationController>(
      SolicitationController,
    );
    solicitationService = module.get<SolicitationService>(SolicitationService);
  });

  it('should be defined', () => {
    expect(solicitationService).toBeDefined();
  });
});
