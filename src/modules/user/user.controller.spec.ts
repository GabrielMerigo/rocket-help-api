import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { canActivate } from 'src/mock/common';
import { AuthGuard } from 'src/guards/auth.guard';
import {
  createUserMock,
  userEntityMock,
  userServiceMock,
} from './mock/user.mock';

describe('User Controller', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [userServiceMock],
    })
      .overrideGuard(AuthGuard)
      .useValue(canActivate)
      .compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
    expect(userService).toBeDefined();
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
    expect(userService).toBeDefined();
  });

  describe('Create', () => {
    it('create method', async () => {
      const result = await userController.create(createUserMock);

      expect(result).toEqual(userEntityMock[0]);
    });
  });

  describe('Read', () => {
    it('findAll method', async () => {
      const result = await userController.findAll();

      expect(result).toEqual(userEntityMock);
    });

    it('find method', async () => {
      const result = await userController.find({ id: 'super-uuid' });

      expect(result).toEqual(userEntityMock[0]);
    });
  });

  describe('Update', () => {
    it('put method', async () => {
      const result = await userController.update(
        { id: 'super-id' },
        userEntityMock[0],
      );

      expect(result).toEqual(userEntityMock[0]);
    });
  });

  describe('Delete', () => {
    it('delete method', async () => {
      const result = await userController.delete({ id: 'super-uuid' });

      expect(result).toEqual(true);
    });
  });
});
