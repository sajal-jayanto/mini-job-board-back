import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class Job {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  title: string;

  @Column()
  companyName: string;

  @Column()
  location: string;

  @Column()
  jobType: string;

  @Column()
  salaryRange: string;

  @Column()
  description: string;

  @Column()
  requirements: string;

  @Column()
  benefits: string;
}