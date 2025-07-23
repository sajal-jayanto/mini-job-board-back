import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from './entities/job.entity';
import { MongoRepository, ObjectId } from 'typeorm';

@Injectable()
export class JobsService {

  constructor(
    @InjectRepository(Job)
    private readonly jobRepo: MongoRepository<Job>,
  ) { }

  async create(createJobDto: CreateJobDto) {
    const job = this.jobRepo.create(createJobDto);
    return this.jobRepo.save(job);
  }

  findAll() {
    return this.jobRepo.find();
  }

  findOne(id: string) {
    return this.jobRepo.findOneBy({ _id: new ObjectId(id) });
  }
}
