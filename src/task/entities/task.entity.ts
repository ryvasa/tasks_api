import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ default: '', nullable: true })
  description: string;

  @Column({ default: false })
  isCompleted: boolean;
}
