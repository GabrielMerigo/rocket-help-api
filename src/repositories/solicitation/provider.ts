import { DataSource } from 'typeorm';
import { Solicitation } from './entity';
import { RepositoriesNames } from '../types';

export const solicitationProvider = [
  {
    provide: RepositoriesNames.SOLICITATION_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Solicitation),
    inject: ['DATA_SOURCE'],
  },
];
