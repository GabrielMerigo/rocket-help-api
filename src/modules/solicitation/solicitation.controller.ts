import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SolicitationService } from './solicitation.service';
import { StandardToCreateAndUpdateSolicitationDTO } from './dtos/standard-create-and-update.dto';
import { UniqueIdDTO } from 'src/global/dtos';

@Controller('solicitation')
export class SolicitationController {
  constructor(private readonly solicitationService: SolicitationService) {}

  @Get()
  findAll() {
    return this.solicitationService.findAll();
  }

  @Get(':id')
  find(@Param() id: UniqueIdDTO) {
    return this.solicitationService.find(id);
  }

  @Post()
  create(@Body() body: StandardToCreateAndUpdateSolicitationDTO) {
    return this.solicitationService.create(body);
  }

  @Delete(':id')
  delete(@Body() id: UniqueIdDTO) {
    return this.solicitationService.delete(id);
  }

  @Put(':id')
  put(
    @Param() { id }: UniqueIdDTO,
    @Body() body: StandardToCreateAndUpdateSolicitationDTO,
  ) {
    return this.solicitationService.updateAll(id, body);
  }
}
