import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';
import { UniqueIdDTO } from 'src/global/dtos';
import { CreateUserDTO, UpdateUserDTO } from './dtos/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async findAll() {
    return this.userRepository.find();
  }

  public async findOne({ id }: UniqueIdDTO) {
    return await this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  private async find({ id }: UniqueIdDTO) {
    const userInstance = await this.userRepository.findOne({
      where: {
        id,
      },
    });

    if (!userInstance) {
      throw new NotFoundException('User not found');
    }

    return userInstance;
  }

  public async findByEmail(email: string) {
    const userInstance = await this.userRepository.findOne({
      where: {
        email,
      },
    });

    return userInstance;
  }

  public async create(body: CreateUserDTO) {
    const userInstance = this.userRepository.create(body);
    return this.userRepository.save([userInstance]);
  }

  public async delete({ id }: UniqueIdDTO) {
    const userToRemove = await this.find({ id });

    return this.userRepository.remove(userToRemove);
  }

  public async update({ id }: UniqueIdDTO, body: UpdateUserDTO) {
    return this.userRepository.update(id, {
      ...body,
    });
  }
}
