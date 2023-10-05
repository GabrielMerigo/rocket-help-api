import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from '../modules/user/user.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService],
})
export class AuthModule {}
