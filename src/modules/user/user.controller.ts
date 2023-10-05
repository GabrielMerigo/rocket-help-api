import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDTO, UpdateUserDTO } from './dtos/user.dto';
import { UniqueIdDTO } from '../../global/dtos';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  public findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  public find(@Param() id: UniqueIdDTO) {
    return this.userService.findOne(id);
  }

  @Post()
  public create(@Body() body: CreateUserDTO) {
    return this.userService.create(body);
  }

  @Delete(':id')
  public delete(@Param() id: UniqueIdDTO) {
    return this.userService.delete(id);
  }

  @Put(':id')
  public update(@Param() id, @Body() body: UpdateUserDTO) {
    return this.userService.update(id, body);
  }
}
