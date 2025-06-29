import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  create(dto: CreateUserDto): Promise<User> {
    return this.userRepository.save({ id: Date.now().toString(), ...dto });
  }

  async findOne(id: string): Promise<any> {
    const user = await this.userRepository.findById(id);
    return user;
  }

  async find(): Promise<User[] | undefined> {
    const users = await this.userRepository.findAll();
    return users;
  }
}
