import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class LoginService {

  constructor(
    private jwtService: JwtService,
    private configService: ConfigService
  ) { }


  login(loginDto: LoginDto) {
    const adminUser = {
      id: 1,
      name: "admin",
      email: "admin@admin.com",
      password: "admin@pass"
    }

    if (loginDto.email !== adminUser.email) {
      throw new NotFoundException(`User not found with email: ${loginDto.email}`);
    }
    if (loginDto.password !== adminUser.password) {
      throw new UnauthorizedException('Password does not match');
    }

    const payload = { id: adminUser.id, name: adminUser.name, email: adminUser.email };
    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.getOrThrow<string>('JWT_SECRET'),
      expiresIn: '20h',
    });

    return {
      message: 'Login successful',
      accessToken,
      user: adminUser
    };
  }

}
