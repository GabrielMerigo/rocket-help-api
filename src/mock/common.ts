import { CanActivate } from '@nestjs/common';

export const canActivate: CanActivate = {
  canActivate: jest.fn(() => true),
};
