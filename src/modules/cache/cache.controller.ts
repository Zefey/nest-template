import { Controller, Get } from '@nestjs/common';
import { RedisService } from './redis.service';

@Controller('cache')
export class CacheController {
  constructor(private redisService: RedisService) {}

  @Get('example')
  async example(): Promise<any> {
    const isExists = await this.redisService.exists('key');
    if (isExists) {
      const data = await this.redisService.get('key');
      return JSON.parse(data);
    } else {
      const data = { id: 1, user: '嘿嘿嘿' };
      await this.redisService.set('key', JSON.stringify(data));
      return data;
    }
  }
}
