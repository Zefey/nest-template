import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { ErrorException } from '@common/error.exception';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(userDto: UserDto): Promise<User> {
    const find = await this.usersRepository.findOne({
      where: {
        username: userDto.username,
      },
    });

    if (find) {
      throw new ErrorException('USER_EXITED', '用户已存在');
    }
    try {
      const user = new User();
      user.username = userDto.username;
      user.password = userDto.password;
      user.create_time = new Date();
      user.update_time = new Date();
      return this.usersRepository.save(user);
    } catch (error) {
      throw new ErrorException('CREATE_USER_FAIL', '创建用户失败');
    }
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
