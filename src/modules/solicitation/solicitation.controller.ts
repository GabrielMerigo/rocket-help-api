import { Body, Controller, Get, Post } from '@nestjs/common';
import { SolicitationService } from './solicitation.service';
import { CreateSolicitationDTO } from './dtos/create-solicitation.dto';

@Controller('solicitation')
export class SolicitationController {
  constructor(private readonly solicitationService: SolicitationService) {}

  @Get()
  findAll() {
    return this.solicitationService.findAll();
  }

  @Post()
  create(@Body() body: CreateSolicitationDTO) {
    console.log(body);
    return this.solicitationService.create(body);
  }
}
