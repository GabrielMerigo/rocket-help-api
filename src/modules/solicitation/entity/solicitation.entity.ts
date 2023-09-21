import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class SolicitationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column('text')
  problem: string;

  @Column('text')
  solution: string;

  @CreateDateColumn()
  date: string;

  @Column('boolean')
  isDone: boolean;
}
