import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Event } from './event.entity';

@Entity()
export class Workshop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime' })
  start: Date;

  @Column({ type: 'datetime' })
  end: Date;

  @Column({ type: 'integer', default: null })
  eventId: number;

  @ManyToOne((type) => Event)
  @JoinColumn({ name: 'eventId', referencedColumnName: 'id' })
  events: Event[];

  @Column()
  name: string;

  @Column({ type: 'datetime' })
  createdAt: string;
}
