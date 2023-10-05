import { Body, Injectable } from '@nestjs/common';
import { SignUpDTO } from './dtos/auth.dtos';
import { UserService } from '../modules/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  // async signIn(username: string, pass: string): Promise<any> {
  //   const user = await this.usersService.findOne(username);
  //   if (user?.password !== pass) {
  //     throw new UnauthorizedException();
  //   }
  //   const { password, ...result } = user;
  //   // TODO: Generate a JWT and return it here
  //   // instead of the user object
  //   return result;
  // }

  public async signUp(@Body() body: SignUpDTO) {
    this.userService.create(body);
  }
}
