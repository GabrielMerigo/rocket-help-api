import { HttpException, HttpStatus } from '@nestjs/common';

export class EmailOrPasswordIncorrect extends HttpException {
  constructor() {
    super('Email or Password Incorrect', HttpStatus.BAD_REQUEST);
  }
}
