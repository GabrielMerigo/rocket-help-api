import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO, SignUpDTO } from './dtos/auth.dtos';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signUp')
  public async signUp(@Body() body: SignUpDTO) {
    return this.authService.signUp(body);
  }

  @Post('signIn')
  public async signIn(@Body() body: SignInDTO) {
    return this.authService.signIn(body);
  }
}
