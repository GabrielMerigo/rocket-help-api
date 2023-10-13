import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO, UpdateUserDTO } from './dtos/user.dto';
import { UniqueIdDTO } from '../../global/dtos';
import { AuthGuard } from '../../guards/auth.guard';

@Controller('users')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  public show(@Param() id: UniqueIdDTO) {
    return this.userService.show(id);
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
