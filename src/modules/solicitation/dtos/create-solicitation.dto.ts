import { IsBoolean, IsString, IsUUID } from 'class-validator';

export class CreateSolicitationDTO {
  @IsUUID()
  id: string;

  @IsString()
  title: string;

  @IsString()
  problem: string;

  @IsString()
  solution: string;

  @IsBoolean()
  isDone: boolean;
}
