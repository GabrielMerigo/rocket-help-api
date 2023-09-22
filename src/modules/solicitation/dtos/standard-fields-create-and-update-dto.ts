import { IsBoolean, IsString, IsUUID } from 'class-validator';

class StandardSchemaToUpdateAndDeleteDTO {
  @IsString()
  title: string;

  @IsString()
  problem: string;

  @IsString()
  solution: string;

  @IsBoolean()
  isDone: boolean;
}

export class UpdateSolicitationDTO extends StandardSchemaToUpdateAndDeleteDTO {}

export class CreateSolicitationDTO extends StandardSchemaToUpdateAndDeleteDTO {
  @IsUUID()
  id: string;
}
