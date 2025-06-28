import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../dtos/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  login(dto: LoginDto) {
    // Simulação de autenticação com e-mail e senha fixos
    if (dto.email !== 'admin@example.com' || dto.password !== 'password') {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = { email: dto.email, sub: 'admin-user-id' };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
