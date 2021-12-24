import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RequestService } from './request.service';

@Module({
  imports: [HttpModule],
  providers: [RequestService],
  exports: [RequestService],
})
export class RequestModule {}
