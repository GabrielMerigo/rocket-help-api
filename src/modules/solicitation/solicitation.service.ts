import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { SolicitationEntity } from './entity/solicitation.entity';
import { StandardToCreateAndUpdateSolicitationDTO } from './dtos/standard-create-and-update.dto';
import { UniqueIdDTO } from 'src/global/dtos';

@Injectable()
export class SolicitationService {
  constructor(
    @InjectRepository(SolicitationEntity)
    private readonly solicitationRepository: Repository<SolicitationEntity>,
  ) {}

  public async findAll(): Promise<SolicitationEntity[]> {
    return this.solicitationRepository.find();
  }

  public async find({ id }: UniqueIdDTO) {
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

  public async delete({ id }: UniqueIdDTO) {
    const solicitationToRemove = await this.find({ id });

    // rever
    if (!solicitationToRemove) {
      throw new NotFoundException('Solicitation not found');
    }

    this.solicitationRepository.remove(solicitationToRemove);
  }

  public create(body: StandardToCreateAndUpdateSolicitationDTO) {
    const solicitationInstance = this.solicitationRepository.create(body);

    return this.solicitationRepository.save([solicitationInstance]);
  }

  public update(
    id: string,
    { ...body }: StandardToCreateAndUpdateSolicitationDTO,
  ) {
    return this.solicitationRepository.update(id, {
      ...body,
    });
  }
}
