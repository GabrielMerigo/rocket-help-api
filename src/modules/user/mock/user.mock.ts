import { UserService } from '../user.service';

export const userEntityMock = [
  {
    id: '6535453f-97e9-46a8-9540-cd3b5b5622f6',
    name: 'Naldo',
    email: 'zizinho@Gmail.com',
    password: '213',
    createAt: '2023-09-26T20:42:23.984Z',
    updateAt: '2023-10-05T22:30:51.000Z',
  },
  {
    id: 'd6541908-6101-4642-8292-2ec5d62a8083',
    name: 'gabriel',
    email: 'gabriel.merigo.dev@gmail.com',
    password: '$2b$06$edxXYXcUYGBdiA28ElOwpuV8xgMZfm4CAO5mh3jXG3Fbf3E0MCHum',
    createAt: '2023-10-06T22:48:43.130Z',
    updateAt: '2023-10-06T22:48:43.130Z',
  },
];

export const userServiceMock = {
  provide: UserService,
  useValue: {
    find: jest.fn().mockResolvedValue(userEntityMock[0]),
    create: jest.fn().mockResolvedValue(userEntityMock[0]),
    findAll: jest.fn().mockResolvedValue(userEntityMock),
    update: jest.fn().mockResolvedValue(userEntityMock[0]),
    delete: jest.fn().mockResolvedValue(true),
    show: jest.fn().mockResolvedValue(userEntityMock[0]),
  },
};

export const createUserMock = {
  name: 'Gabriel',
  email: 'gabriel@merigo.com',
  password: '1231',
};
