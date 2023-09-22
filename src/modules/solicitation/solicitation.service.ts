import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { SolicitationEntity } from './entity/solicitation.entity';
import { CreateSolicitationDTO } from './dtos/create-solicitation.dto';
import { UniqueIdDTO } from 'src/global/dtos';

@Injectable()
export class SolicitationService {
  constructor(
    @InjectRepository(SolicitationEntity)
    private readonly solicitationRepository: Repository<SolicitationEntity>,
  ) {}

  async findAll(): Promise<SolicitationEntity[]> {
    return this.solicitationRepository.find();
  }

  async find({ id }: UniqueIdDTO) {
    const solicitation = await this.solicitationRepository.findOne({
      where: {
        id,
      },
    });

    if (!solicitation) {
      throw new NotFoundException('Solicitation not found');
    }

    return solicitation;
  }

  async delete({ id }: UniqueIdDTO) {
    const solicitationToRemove = await this.find({ id });

    if (!solicitationToRemove) {
      throw new NotFoundException('Solicitation not found');
    }

    this.solicitationRepository.remove(solicitationToRemove);
  }

  create(body: CreateSolicitationDTO) {
    const solicitation = this.solicitationRepository.create(body);

    return this.solicitationRepository.save([solicitation]);
  }
}
