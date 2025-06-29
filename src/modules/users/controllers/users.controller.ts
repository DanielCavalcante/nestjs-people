import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.usersService.create(createUserDto);
    } catch (error) {
      console.log(error);
      return HttpStatus.BAD_REQUEST;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  findOne(@Param('id') id: string) {
    try {
      return this.usersService.findOne(id);
    } catch (error) {
      console.log(error);
      return HttpStatus.BAD_REQUEST;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async find() {
    try {
      return await this.usersService.find();
    } catch (error) {
      console.log(error);
      return HttpStatus.BAD_REQUEST;
    }
  }
}
