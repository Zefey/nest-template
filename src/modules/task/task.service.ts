import { Injectable } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import { timeLogger } from '@common/logger';

@Injectable()
export class TaskService {
  /*
    标准的cron patterns:
        * * * * * *
        | | | | | |
        | | | | | day of week
        | | | | month
        | | | day of month
        | | hour
        | minute
        second (optional)
  */
  @Cron('0 0 6 * * *')
  handleCron() {
    timeLogger.info('每天6点调用');
  }

  @Interval(3600000)
  handleInterval() {
    timeLogger.info('每过3600秒调用');
  }

  @Timeout(5000)
  handleTimeout() {
    timeLogger.info('5秒后调用');
  }
}
