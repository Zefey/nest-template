import { Injectable } from '@nestjs/common';
import * as redis from 'redis';
import { promisify } from 'util';
import { ErrorException } from '@common/error.exception';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RedisService {
  private readonly client: redis.RedisClient;
  private readonly sendCommand: Function;

  constructor(private readonly configService: ConfigService) {
    this.client = redis.createClient(this.configService.get('redis'));

    // redis 只支持回调方式，这里封装成 promise
    this.sendCommand = promisify(this.client.sendCommand).bind(this.client);
  }

  async command(command: string, ...arg) {
    try {
      return await this.sendCommand(command, arg);
    } catch (error) {
      throw new ErrorException(500, 'Redis 执行命令失败');
    }
  }

  async get(key: string) {
    return await this.command('GET', key);
  }

  async set(key: string, value: string, ttl?: number) {
    let config = [];
    if (ttl) {
      config = ['EX', ttl];
    }
    return await this.command('SET', key, value, ...config);
  }

  async exists(key: string) {
    return await this.command('EXISTS', key);
  }

  async del(key: string) {
    return await this.command('DEL', key);
  }
}
