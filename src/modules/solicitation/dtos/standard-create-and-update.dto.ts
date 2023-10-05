import { IsBoolean, IsString } from 'class-validator';

export class StandardToCreateAndUpdateSolicitationDTO {
  @IsString()
  public title: string;

  @IsString()
  public problem: string;

  @IsString()
  public solution: string;

  @IsBoolean()
  public isDone: boolean;
}
