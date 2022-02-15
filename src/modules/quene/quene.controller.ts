import { InjectQueue } from '@nestjs/bull';
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Queue } from 'bull';
import { QueneService } from './quene.service';

@Controller('quene')
export class QueneController {
  constructor(
    @InjectQueue('task') private readonly taskQueue: Queue,
    private readonly taskSrv: QueneService,
  ) {}

  @Get()
  async getTasl() {
    return await this.taskSrv.showJobs();
  }

  @Post()
  async addtask() {
    const task = await this.taskQueue.add('ticket', 20);
    return task.opts;
  }

  @Delete()
  async deleteOld() {
    return await this.taskSrv.cleanOldJobs();
  }

  @Put()
  async toggle() {
    const status = await this.taskQueue.isPaused();
    if (status) {
      return await this.taskQueue.resume();
    }
    return await this.taskQueue.pause();
  }
}
