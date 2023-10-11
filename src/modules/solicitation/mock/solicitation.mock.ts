import { SolicitationService } from 'src/modules/solicitation/solicitation.service';
import { StandardToCreateAndUpdateSolicitationDTO } from '../dtos/standard-create-and-update.dto';

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
    update: jest.fn().mockResolvedValue(solicitationEntityList[0]),
    delete: jest.fn().mockResolvedValue(true),
  },
};

export const createSolicitationMock: StandardToCreateAndUpdateSolicitationDTO =
  {
    isDone: false,
    problem: 'Some Problem',
    solution: 'Some Solution',
    title: 'Some title',
  };
