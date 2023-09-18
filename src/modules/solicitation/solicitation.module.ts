import { Module } from '@nestjs/common';
import { SolicitationController } from './solicitation.controller';
import { SolicitationService } from './solicitation.service';
import { solicitationProvider } from 'src/repositories/solicitation/provider';

@Module({
  imports: [SolicitationService],
  controllers: [SolicitationController],
  providers: [...solicitationProvider, SolicitationService],
})
export class SolicitationModule {}
