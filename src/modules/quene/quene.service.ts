import {
  InjectQueue,
  OnQueueActive,
  OnQueueCleaned,
  OnQueueCompleted,
  OnQueueDrained,
  OnQueueError,
  OnQueueFailed,
  OnQueuePaused,
  OnQueueProgress,
  OnQueueRemoved,
  OnQueueResumed,
  OnQueueStalled,
  OnQueueWaiting,
  Process,
  Processor,
} from '@nestjs/bull';
import { Job, Queue } from 'bull';

@Processor('task')
export class QueneService {
  constructor(@InjectQueue('task') private readonly taskQueue: Queue) {}

  @Process('ticket')
  async processTicket(job: Job<number>) {
    console.log('Processing', job.id, 'for', job.data, 'seconds');
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('');
      }, job.data * 1000);
    });
    console.log('Processing done', job.id);
  }

  async cleanOldJobs() {
    (await this.taskQueue.getJobs(['completed'])).map(
      async (job) => await job.remove(),
    );
    (await this.taskQueue.getJobs(['failed'])).map(
      async (job) => await job.remove(),
    );
  }

  async showJobs() {
    const completed = (await this.taskQueue.getJobs(['completed'])).map(
      (job) => job.id,
    );
    const active = (await this.taskQueue.getJobs(['active'])).map(
      (job) => job.id,
    );
    const waiting = (await this.taskQueue.getJobs(['waiting'])).map(
      (job) => job.id,
    );
    const paused = (await this.taskQueue.getJobs(['paused'])).map(
      (job) => job.id,
    );
    const failed = (await this.taskQueue.getJobs(['failed'])).map(
      (job) => job.id,
    );

    return {
      completed,
      active,
      waiting,
      paused,
      failed,
    };
  }

  @OnQueueActive()
  onQueueActive(job: Job) {
    console.log('OnQueueActive', job.id);
  }

  @OnQueueError()
  onQueueError(error: Error) {
    console.log('OnQueueError', error);
  }

  @OnQueueWaiting()
  onQueueWaiting(jobId: number | string) {
    console.log('OnQueueWaiting', jobId);
  }

  @OnQueueStalled()
  onQueueStalled(job: Job) {
    console.log('OnQueueStalled', job.id);
  }

  @OnQueueProgress()
  onQueueProgress(job: Job) {
    console.log('OnQueueProgress', job.id);
  }

  @OnQueueCompleted()
  onQueueCompleted(job: Job, result: any) {
    console.log('OnQueueCompleted', job.id, result);
  }

  @OnQueueFailed()
  onQueueFailed(job: Job, err: Error) {
    console.log('onQueueFailed', job.id, err);
  }

  @OnQueuePaused()
  onQueuePaused() {
    console.log('OnQueuePaused');
  }

  @OnQueueResumed()
  onQueueResumed() {
    console.log('OnQueueResumed');
  }

  @OnQueueCleaned()
  onQueueCleaned(jobs: Job[], type: string) {
    console.log('OnQueueCleaned', jobs, type);
  }

  @OnQueueDrained()
  onQueueDrained() {
    console.log('OnQueueDrained');
  }

  @OnQueueRemoved()
  onQueueRemoved(job: Job) {
    console.log('OnQueueRemoved', job.id);
  }
}
