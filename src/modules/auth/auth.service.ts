import { Injectable } from '@nestjs/common';
import { UserService } from '@modules/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UserService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }
}
