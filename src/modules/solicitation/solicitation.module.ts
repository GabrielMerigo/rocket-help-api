import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SolicitationController } from './solicitation.controller';
import { SolicitationService } from './solicitation.service';
import { SolicitationEntity } from './entity/solicitation.entity';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([SolicitationEntity]),
    AuthModule,
    UserModule,
  ],
  controllers: [SolicitationController],
  providers: [SolicitationService],
})
export class SolicitationModule {}
