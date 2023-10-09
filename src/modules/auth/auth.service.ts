import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { BadRequestException, Body, Injectable } from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './dtos/auth.dtos';

import { UserService } from '../user/user.service';
import { EmailAlreadyExistsException } from '../../errors/email-already-exists.exception copy';
import { EmailOrPasswordIncorrect } from '../../errors/email-or-password-incorrect.exception';
import { env } from '../../env';

const SALT = 6;

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  public checkToken(token: string) {
    try {
      const data = this.jwtService.verify(token);

      return data;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  public async signIn(@Body() { password, email }: SignInDTO) {
    const user = await this.userService.findByEmail(email);

    if (!user) throw new EmailOrPasswordIncorrect();

    const passwordMatch = bcrypt.compare(password, user.password);

    if (!passwordMatch) throw new EmailOrPasswordIncorrect();

    const payload = { sub: user.id, username: user.name };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '15d',
      secret: env.JWT_SECRET,
    });

    return {
      accessToken,
    };
  }

  public async signUp(@Body() { password, email, name }: SignUpDTO) {
    const emailExists = await this.userService.findByEmail(email);

    if (emailExists) {
      throw new EmailAlreadyExistsException();
    }

    const passwordHashed = await bcrypt.hash(password, SALT);

    await this.userService.create({
      password: passwordHashed,
      email,
      name,
    });
  }
}
