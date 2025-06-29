import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async save(user: User): Promise<User> {
    const userSaved = await this.repository.create(user);
    return userSaved;
  }

  async findById(id: string): Promise<User | any> {
    const user = await this.repository.find({ where: { id } });
    return user;
  }

  async findAll(): Promise<User[] | []> {
    const users = await this.repository.find();
    return users;
  }
}
