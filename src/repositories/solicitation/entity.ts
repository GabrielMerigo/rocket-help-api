import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Solicitation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column('text')
  problemDescription: string;

  @Column('text')
  solutionDescription: string;

  @Column('date')
  date: string;

  @Column('boolean')
  isDone: boolean;
}
