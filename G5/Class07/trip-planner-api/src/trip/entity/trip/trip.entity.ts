import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { Status } from './trip.interface';
import { BudgetORMEntity } from 'src/budget/entity/budget.entity';
import { UserORMEntity } from 'src/users/entity/users.entity';

@Entity({ name: 'trip' })
export class TripORMEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => BudgetORMEntity, (budget) => budget.trip)
  budget: BudgetORMEntity;

  @Column()
  destination: string;

  @Column()
  notes: string;

  @Column()
  status: Status;

  @Column({
    type: 'bigint',
  })
  startDate: Timestamp;

  @Column({
    type: 'bigint',
  })
  endDate: Timestamp;

  @Column({
    type: 'bigint',
  })
  createdAt: Timestamp;

  @Column({
    type: 'bigint',
    nullable: true,
  })
  updatedAt: Timestamp | null;

  @Column()
  imageUrl: string;

  @ManyToOne(() => UserORMEntity, (user) => user.trips)
  user: UserORMEntity;
}
