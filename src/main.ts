import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


 const config = new DocumentBuilder()
    .setTitle('PTB backend')
    .setDescription('ptb assignment')
    .setVersion('1.0')
    .addTag('vouchers')
    .build();
 const document = SwaggerModule.createDocument(app, config);
 SwaggerModule.setup('api', app, document);



  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));
  await app.listen(3000);
}
bootstrap();
