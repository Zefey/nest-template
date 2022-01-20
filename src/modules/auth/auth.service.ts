import { Injectable } from '@nestjs/common';
import { UserService } from '@modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import LoginDto from './dto/login.dto';
import { User } from '@modules/user/user.entity';
import { ErrorException } from '@src/common/error.exception';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user && user.password === password) {
      return user;
    } else {
      throw new ErrorException('LOGIN_FAIL', '登录失败');
    }
  }

  async login(loginDto: LoginDto): Promise<{ token: string; userInfo: User }> {
    const user = await this.usersService.findOneByUsername(loginDto.username);
    if (user && user.password === loginDto.password) {
      return {
        token: this.jwtService.sign({ username: user.username, id: user.id }),
        userInfo: user,
      };
    } else {
      throw new ErrorException('LOGIN_FAIL', '登录失败');
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
