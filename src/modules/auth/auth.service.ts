import { Injectable } from '@nestjs/common';
import { UserService } from '@modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
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
    }
    return null;
  }

  async login(username: string, password: string) {
    const user = await this.usersService.findOneByUsername(username);
    if (user && user.password === password) {
      return {
        token: this.jwtService.sign({ username: user.username, id: user.id }),
      };
    }
    return null;
  }
}
