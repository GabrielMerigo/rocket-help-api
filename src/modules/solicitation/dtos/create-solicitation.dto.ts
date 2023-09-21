import { IsBoolean, IsString, IsUUID } from 'class-validator';

export class CreateSolicitationDTO {
  @IsUUID()
  id: number;

  @IsString()
  title: string;

  @IsString()
  problem: string;

  @IsString()
  solution: string;

  @IsBoolean()
  isDone: boolean;
}
