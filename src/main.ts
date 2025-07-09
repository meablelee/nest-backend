import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import open from 'open';  // 引入 open 包

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API 文档')
    .setDescription('NestJS Swagger 自动生成的接口文档')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
  const url = 'http://localhost:3000';
  console.log(`Application is running on: ${url}`);

  // 启动后自动打开浏览器访问 Swagger 页面
  //open(`${url}/api-docs`);
}
bootstrap();
