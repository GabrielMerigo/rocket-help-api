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

import { SolicitationService } from './solicitation.service';
import { StandardToCreateAndUpdateSolicitationDTO } from './dtos/standard-create-and-update.dto';
import { AuthGuard } from '../../guards/auth.guard';
import { UniqueIdDTO } from 'src/global/dtos';

@Controller('solicitation')
@UseGuards(AuthGuard)
export class SolicitationController {
  constructor(private readonly solicitationService: SolicitationService) {}

  @Get()
  public findAll() {
    return this.solicitationService.findAll();
  }

  @Get(':id')
  public find(@Param() id: UniqueIdDTO) {
    return this.solicitationService.find(id);
  }

  @Post()
  public create(@Body() body: StandardToCreateAndUpdateSolicitationDTO) {
    return this.solicitationService.create(body);
  }

  @Delete(':id')
  public delete(@Body() id: UniqueIdDTO) {
    return this.solicitationService.delete(id);
  }

  @Put(':id')
  public put(
    @Param() { id }: UniqueIdDTO,
    @Body() body: StandardToCreateAndUpdateSolicitationDTO,
  ) {
    return this.solicitationService.updateAll(id, body);
  }
}
