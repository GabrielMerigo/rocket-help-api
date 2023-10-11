import { Repository } from 'typeorm';

import { Test, TestingModule } from '@nestjs/testing';
import { SolicitationService } from './solicitation.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { SolicitationEntity } from './entity/solicitation.entity';
import { NotFoundException } from '@nestjs/common';

describe('SolicitationService', () => {
  let solicitationService: SolicitationService;
  let solicitationRepository: Repository<SolicitationEntity>;

  const solicitationRepositoryToken = getRepositoryToken(SolicitationEntity);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SolicitationService,
        {
          provide: solicitationRepositoryToken,
          useClass: Repository,
        },
      ],
    }).compile();

    solicitationService = module.get<SolicitationService>(SolicitationService);
    solicitationRepository = module.get<Repository<SolicitationEntity>>(
      solicitationRepositoryToken,
    );
  });

  describe('Read', () => {
    it('should return an error if there is no solicitation', async () => {
      jest
        .spyOn(solicitationRepository, 'findOne')
        .mockResolvedValueOnce(undefined);

      let exception;

      try {
        await solicitationService.find({ id: 'super-uuid' });
      } catch (error) {
        exception = error;
      }

      expect(exception).toBeInstanceOf(NotFoundException);
    });
  });

  describe('Delete', () => {
    it('should return an error if there is no solicitation', async () => {
      jest.spyOn(solicitationService, 'find').mockResolvedValueOnce(undefined);

      let exception;

      try {
        await solicitationService.delete({ id: 'super-uuid' });
      } catch (error) {
        exception = error;
      }

      expect(exception).toBeInstanceOf(NotFoundException);
    });
  });
});
