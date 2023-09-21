import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { SolicitationEntity } from './entity/solicitation.entity';
import { CreateSolicitationDTO } from './dtos/create-solicitation.dto';

@Injectable()
export class SolicitationService {
  constructor(
    @InjectRepository(SolicitationEntity)
    private readonly solicitationRepository: Repository<SolicitationEntity>,
  ) {}

  async findAll(): Promise<SolicitationEntity[]> {
    return this.solicitationRepository.find();
  }

  async create(body: CreateSolicitationDTO) {
    const solicitation = this.solicitationRepository.create(body);

    return this.solicitationRepository.save([solicitation]);
  }
}
