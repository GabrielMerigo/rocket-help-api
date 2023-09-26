import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';
import { UniqueIdDTO } from 'src/global/dtos';
import { StandardToCreateAndUpdateUserDTO } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findAll() {
    return this.userRepository.find();
  }

  async findOne({ id }: UniqueIdDTO) {
    return await this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  async create(body: StandardToCreateAndUpdateUserDTO) {
    const userInstance = this.userRepository.create(body);
    return this.userRepository.save([userInstance]);
  }
}
