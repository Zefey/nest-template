import { Injectable } from '@nestjs/common';
import { UserService } from '@modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import LoginDto from './dto/login.dto';
import { ErrorException } from '@src/common/error.exception';
import { JwtPayload } from './auth.interface';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<any> {
    const user = await this.usersService.findOneByUsername(loginDto.username);
    if (user && user.password === loginDto.password) {
      const payload: JwtPayload = {
        username: user.username,
        id: user.id,
        role: user.role,
      };
      return {
        token: this.jwtService.sign(payload),
        ...user,
      };
    } else {
      throw new ErrorException(500, '登录失败');
    }
  }

  async getJwtPayload(token: string): Promise<any> {
    try {
      return this.jwtService.verify(token);
    } catch (e) {
      return null;
    }
  }
}
