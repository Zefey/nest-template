import { Module } from '@nestjs/common';
import { QueneController } from './quene.controller';
import { QueneService } from './quene.service';
import { BullModule } from '@nestjs/bull';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    BullModule.registerQueueAsync({
      name: 'task',
      useFactory: (configService: ConfigService) => ({
        redis: configService.get('redis'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [QueneController],
  providers: [QueneService],
})
export class QueneModule {}
