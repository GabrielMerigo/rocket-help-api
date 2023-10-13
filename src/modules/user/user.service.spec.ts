import { Repository } from 'typeorm';

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './entity/user.entity';

describe('UserService', () => {
  let userService: UserService;
  let userRepository: Repository<UserEntity>;

  const userRepositoryToken = getRepositoryToken(UserEntity);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: userRepositoryToken,
          useClass: Repository,
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    userRepository = module.get<Repository<UserEntity>>(userRepositoryToken);
  });

  describe('Read', () => {
    it('should return an error if there is no user', async () => {
      jest.spyOn(userRepository, 'findOne').mockResolvedValueOnce(undefined);

      let exception;

      try {
        await userService.show({ id: 'super-uuid' });
      } catch (error) {
        exception = error;
      }

      expect(exception).toBeInstanceOf(NotFoundException);
    });
  });

  describe('Delete', () => {
    it('should return an error if there is no user', async () => {
      jest.spyOn(userRepository, 'findOne').mockResolvedValueOnce(undefined);

      let exception;

      try {
        await userService.delete({ id: 'super-uuid' });
      } catch (error) {
        exception = error;
      }

      expect(exception).toBeInstanceOf(NotFoundException);
    });
  });
});
