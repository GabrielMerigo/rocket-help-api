import { IsUUID } from 'class-validator';

export class UniqueIdDTO {
  @IsUUID()
  id: string;
}
