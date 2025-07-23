import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { Application } from './entities/application.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

@Injectable()
export class ApplicationService {

  constructor(
    @InjectRepository(Application)
    private readonly applicationRepo: MongoRepository<Application>,
  ) { }

  create(createApplicationDto: CreateApplicationDto) {
    const application = this.applicationRepo.create(createApplicationDto);
    return this.applicationRepo.save(application);
  }

  findAll() {
    return this.applicationRepo.find();
  }
}
