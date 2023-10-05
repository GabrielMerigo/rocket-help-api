import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class SolicitationEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ length: 500 })
  public title: string;

  @Column('text')
  public problem: string;

  @Column('text')
  public solution: string;

  @CreateDateColumn()
  public date: string;

  @Column('boolean')
  public isDone: boolean;
}
