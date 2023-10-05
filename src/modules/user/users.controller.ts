import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO, UpdateUserDTO } from './dtos/user.dto';
import { UniqueIdDTO } from '../../global/dtos';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  find(@Param() id: UniqueIdDTO) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateUserDTO) {
    return this.userService.create(body);
  }

  @Delete(':id')
  delete(@Param() id: UniqueIdDTO) {
    return this.userService.delete(id);
  }

  @Put(':id')
  update(@Param() id, @Body() body: UpdateUserDTO) {
    return this.userService.update(id, body);
  }
}
