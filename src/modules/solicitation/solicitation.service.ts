import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';

import { Solicitation } from 'src/repositories/solicitation/entity';
import { RepositoriesNames } from 'src/repositories/types';

@Injectable()
export class SolicitationService {
  constructor(
    @Inject(RepositoriesNames.SOLICITATION_REPOSITORY)
    private readonly photoRepository: Repository<Solicitation>,
  ) {}

  async findAll(): Promise<Solicitation[]> {
    return this.photoRepository.find();
  }
}
