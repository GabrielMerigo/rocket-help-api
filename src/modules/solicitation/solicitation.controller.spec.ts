import { Test, TestingModule } from '@nestjs/testing';
import { SolicitationController } from './solicitation.controller';
import {
  solicitationEntityList,
  solicitationServiceMock,
} from 'src/modules/solicitation/mock/solicitation.mock';
import { AuthGuard } from 'src/guards/auth.guard';
import { SolicitationService } from './solicitation.service';
import { createSolicitationMock } from './mock/solicitation.mock';
import { canActivate } from 'src/mock/common';

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
    expect(solicitationController).toBeDefined();
    expect(solicitationService).toBeDefined();
  });

  describe('Create', () => {
    it('create method', async () => {
      const result = await solicitationController.create(
        createSolicitationMock,
      );

      expect(result).toEqual(solicitationEntityList[0]);
    });
  });

  describe('Read', () => {
    it('findAll method', async () => {
      const result = await solicitationController.findAll();

      expect(result).toEqual(solicitationEntityList);
    });

    it('find method', async () => {
      const result = await solicitationController.find({ id: 'super-uuid' });

      expect(result).toEqual(solicitationEntityList[0]);
    });
  });

  describe('Update', () => {
    it('put method', async () => {
      const result = await solicitationController.update(
        { id: 'super-id' },
        solicitationEntityList[0],
      );

      expect(result).toEqual(solicitationEntityList[0]);
    });
  });

  describe('Delete', () => {
    it('delete method', async () => {
      const result = await solicitationController.delete({ id: 'super-uuid' });

      expect(result).toEqual(true);
    });
  });
});
