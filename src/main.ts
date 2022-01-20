require('dotenv').config(); // 加载 .env 中的配置到环境变量

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
    .addBearerAuth(
      {
        // I was also testing it without prefix 'Bearer ' before the JWT
        description: `[just text field] Please enter token in following format: Bearer <JWT>`,
        name: 'Authorization',
        bearerFormat: 'Bearer', // I`ve tested not to use this field, but the result was the same
        scheme: 'Bearer',
        type: 'http', // I`ve attempted type: 'apiKey' too
        in: 'Header',
      },
      'token', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
}
bootstrap();
