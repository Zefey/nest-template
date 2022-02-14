import { Injectable } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import { timeLogger } from '@common/logger';

@Injectable()
export class TaskService {
  @Cron('45 * * * * *')
  handleCron() {
    timeLogger.info('每分钟第 45 秒调用');
  }

  @Interval(10000)
  handleInterval() {
    timeLogger.info('每过10秒调用');
  }

  @Timeout(5000)
  handleTimeout() {
    timeLogger.info('5秒后调用');
  }
}
