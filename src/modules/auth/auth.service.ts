import { Injectable } from '@nestjs/common';
import { UserService } from '@modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import LoginDto from './dto/login.dto';
import { ErrorException } from '@src/common/error.exception';
import { JwtPayload } from './auth.interface';
import { RedisService } from '@modules/cache/redis.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
    private readonly redisService: RedisService,
  ) {}

  async login(loginDto: LoginDto): Promise<any> {
    const user = await this.usersService.findOneByUsername(loginDto.username);
    if (user && user.password === loginDto.password) {
      const payload: JwtPayload = {
        username: user.username,
        id: user.id,
        role: user.role,
      };
      const key = `jwt_${user.id}_${user.username}`;
      const token = this.jwtService.sign(payload);
      // redis 缓存token
      this.redisService.set(key, `Bearer ${token}`);
      return {
        token,
        ...user,
      };
    } else {
      throw new ErrorException(500, '登录失败');
    }
  }

  async logout(data: JwtPayload): Promise<any> {
    const key = `jwt_${data.id}_${data.username}`;
    const isExists = await this.redisService.exists(key);
    if (isExists) {
      this.redisService.del(key);
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
