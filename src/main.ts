import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { RequestMiddleware } from '@common/request.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 请求处理中间件：处理 traceID
  app.use(RequestMiddleware);

  const options = new DocumentBuilder()
    .setTitle('example')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
}
bootstrap();
