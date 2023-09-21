import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SolicitationController } from './solicitation.controller';
import { SolicitationService } from './solicitation.service';
import { SolicitationEntity } from './entity/solicitation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SolicitationEntity])],
  controllers: [SolicitationController],
  providers: [SolicitationService],
})
export class SolicitationModule {}
