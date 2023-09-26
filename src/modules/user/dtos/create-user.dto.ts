import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class StandardToCreateAndUpdateUserDTO {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 6,
  })
  password: string;
}
