import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { BadRequestException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from '../user/entity/user.entity';
import { Repository } from 'typeorm';

describe('AuthService', () => {
  let authService: AuthService;
  let jwtService: JwtService;

  const userRepositoryToken = getRepositoryToken(UserEntity);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        UserService,
        {
          provide: JwtService,
          useValue: {
            verify: jest.fn(),
          },
        },
        {
          provide: userRepositoryToken,
          useClass: Repository,
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);

    module.get<Repository<UserEntity>>(userRepositoryToken);
  });

  describe('checkToken', () => {
    it('should return decoded data when a valid token is provided', () => {
      const userData = { sub: 1, username: 'testUser' };
      const validToken = 'validToken';

      jwtService.verify = jest.fn().mockReturnValue(userData);

      const result = authService.checkToken(validToken);

      expect(result).toEqual(userData);
      expect(jwtService.verify).toHaveBeenCalledWith(validToken);
    });

    it('should throw a BadRequestException when an invalid token is provided', () => {
      const invalidToken = 'invalidToken';

      jwtService.verify = jest.fn().mockImplementation(() => {
        throw new Error('Invalid token');
      });

      expect(() => authService.checkToken(invalidToken)).toThrowError(
        BadRequestException,
      );
      expect(jwtService.verify).toHaveBeenCalledWith(invalidToken);
    });
  });
});
