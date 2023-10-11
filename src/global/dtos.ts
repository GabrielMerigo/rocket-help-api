import { IsUUID } from 'class-validator';

export class UniqueIdDTO {
  @IsUUID()
  public id: string;
}
