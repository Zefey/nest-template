import { Controller, Get } from '@nestjs/common';
import { RedisService } from './redis.service';

@Controller('cache')
export class CacheController {
  constructor(private redisService: RedisService) {}

  @Get('example')
  async example(): Promise<any> {
    const isExists = await this.redisService.command('EXISTS', 'key');
    console.log('isExists', isExists);
    if (isExists) {
      const data = await this.redisService.command('GET', 'key');
      return JSON.parse(data);
    } else {
      const data = { id: 1, user: '嘿嘿嘿' };
      await this.redisService.command('SET', 'key', JSON.stringify(data));
      return data;
    }
  }
}
