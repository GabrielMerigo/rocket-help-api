import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SolicitationModule } from '../solicitation/solicitation.module';
import { env } from 'src/env';

@Module({
  imports: [
    SolicitationModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: env.DB_PORT,
      username: env.DB_USERNAME,
      password: env.DB_PASSWORD,
      database: env.DB_DATABASE,
      entities: [],
      synchronize: env.NODE_ENV === 'dev' ? true : false, // Olha para a entidade e reflete no banco de dados
      autoLoadEntities: true,
    }),
    SolicitationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
