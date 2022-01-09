import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  taskName: string;

  @Column()
  taskType: string;

  @Column()
  created: Date;

  @Column()
  lastUpdated: Date;

  @Column()
  completed: boolean;

  @Column({ default: true })
  isActive: boolean;
}
