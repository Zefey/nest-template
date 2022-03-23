require('dotenv').config(); // 加载 .env 中的配置到环境变量

import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { RequestMiddleware } from '@common/request.middleware';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { grpcClientOptions } from './modules/grpc/grpc-client.options';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 请求处理中间件：处理 traceID
  app.use(RequestMiddleware);

  // 设置所有 api 访问前缀
  app.setGlobalPrefix('/api');

  // 跨域配置
  app.enableCors();

  // 静态文件配置，路径前缀为 /，用于部署非前端构建的静态文件
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/public',
  });

  const options = new DocumentBuilder()
    .setTitle('example')
    .setDescription('The API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);

  app.connectMicroservice(grpcClientOptions);
  app.startAllMicroservices();

  await app.listen(process.env.SERVER_PORT || 3000);
}
bootstrap();
