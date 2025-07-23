import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from './entities/job.entity';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';

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

  async findOne(id: string) {
    if (!ObjectId.isValid(id)) throw new NotFoundException('Invalid Job ID');
    const selectedJob = await this.jobRepo.findOneBy({ _id: new ObjectId(id) });
    if (!selectedJob) throw new NotFoundException('Job not found');
    return selectedJob;
  }
}
