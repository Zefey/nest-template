import {
  ClassSerializerInterceptor,
  Module,
  ValidationPipe,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  // APP_GUARD,
  APP_FILTER,
  APP_INTERCEPTOR,
  APP_PIPE,
} from '@nestjs/core';
import { AppService } from './app.service';
import { UserModule } from '@modules/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from '@config/database.config';
import jwtConfig from '@config/jwt.config';
import redis from '@config/redis.config';
import { TransformInterceptor } from '@common/transform.interceptor';
import { AllExceptionsFilter } from '@common/exception.filter';
import { RequestModule } from '@modules/request/request.module';
import { AuthModule } from '@modules/auth/auth.module';
import { ErrorException } from '@src/common/error.exception';
import * as _ from 'lodash';
import { FileModule } from '@modules/file/file.module';
// import { RolesGuard } from '@modules/auth/roles.guard';
import { CacheModule } from '@modules/cache/cache.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, jwtConfig, redis],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        configService.get('database'),
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
    RequestModule,
    FileModule,
    CacheModule,
  ],
  providers: [
    AppService,
    {
      // 异常过滤器，格式化错误输出
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      // 全局拦截器
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    {
      // 全局拦截器
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    {
      // 全局参数校验 pipe
      provide: APP_PIPE,
      useFactory: () =>
        new ValidationPipe({
          transform: true,
          // 自定义异常
          exceptionFactory: (errors) =>
            new ErrorException(
              400,
              '参数错误',
              _.flatten(
                errors
                  .filter((item) => !!item.constraints)
                  .map((item) => Object.values(item.constraints)),
              ),
            ),
        }),
    },
    // {
    //   // 全局注册权限守卫
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
  ],
})
export class AppModule {}
