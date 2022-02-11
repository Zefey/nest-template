import { Module } from '@nestjs/common';
import { CacheController } from './cache.controller';
import { RedisService } from './redis.service';

@Module({
  controllers: [CacheController],
  providers: [RedisService],
  exports: [RedisService],
})
export class CacheModule {}
