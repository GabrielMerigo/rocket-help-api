import { IsBoolean, IsString } from 'class-validator';

export class StandardToCreateAndUpdateSolicitationDTO {
  @IsString()
  title: string;

  @IsString()
  problem: string;

  @IsString()
  solution: string;

  @IsBoolean()
  isDone: boolean;
}
