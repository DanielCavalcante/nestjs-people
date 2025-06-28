import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserRepository } from '../repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  create(dto: CreateUserDto): User {
    return this.userRepository.save({ id: Date.now().toString(), ...dto });
  }

  findOne(id: string): User | undefined {
    return this.userRepository.findById(id);
  }
}