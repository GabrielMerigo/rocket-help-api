import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UniqueIdDTO } from 'src/global/dtos';
import { StandardToCreateAndUpdateUserDTO } from './dtos/create-user.dto';

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
  create(@Body() body: StandardToCreateAndUpdateUserDTO) {
    return this.userService.create(body);
  }
}
