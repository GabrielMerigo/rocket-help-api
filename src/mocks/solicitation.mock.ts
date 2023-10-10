import { CanActivate } from '@nestjs/common';
import { SolicitationService } from 'src/modules/solicitation/solicitation.service';

export const solicitationEntityList = [
  {
    id: 'id-mocked-1',
    title: 'My Notebook is broken',
    problem: 'Suddenly my computer is not working anymore',
    solution: 'We cam talk to discuss a solution',
    date: '2023-09-26T20:36:51.823Z',
    isDone: false,
  },
  {
    id: 'id-mocked-2',
    title: 'My cellphone is broken',
    problem: 'My life',
    solution: 'Some solution',
    date: '2023-01-21T20:22:22.324Z',
    isDone: true,
  },
];

export const solicitationServiceMock = {
  provide: SolicitationService,
  useValue: {
    find: jest.fn().mockResolvedValue(solicitationEntityList[0]),
    create: jest.fn().mockResolvedValue(solicitationEntityList[0]),
    findAll: jest.fn().mockResolvedValue(solicitationEntityList),
    updateAll: jest.fn().mockResolvedValue(solicitationEntityList[0]),
    delete: jest.fn().mockResolvedValue(true),
  },
};

export const canActivate: CanActivate = {
  canActivate: jest.fn(() => true),
};
