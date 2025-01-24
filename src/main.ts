import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { GlobalInterceptor } from './interceptors/global.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Tasks example')
    .setDescription('The tasks API description')
    .setVersion('1.0')
    .addTag('tasks')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new GlobalInterceptor());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
