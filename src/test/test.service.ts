import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Test } from './test.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private readonly testRepository: Repository<Test>,
  ) {}

  async findAll(): Promise<Test[]> {
    return this.testRepository.find();
  }

 
  async create(data: Partial<Test>): Promise<Test> {
    const entity = this.testRepository.create(data);
    return this.testRepository.save(entity);
  }

  async createBatch(data: Partial<Test>[]): Promise<Test[]> {
    const entities = this.testRepository.create(data);
    return this.testRepository.save(entities);
  }
}
