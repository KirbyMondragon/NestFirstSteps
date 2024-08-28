import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    //Estos Pipes funcionan con toda la App con los DTOS que hemos configurado
    new ValidationPipe({
      whitelist: true,
      //Con whitelist hacemos que solo se reciban los datos que necesitamos, pero no marca errores 
      forbidNonWhitelisted: true,
      //forbidNonWhitelisted nos marca errores al enviar datos que no son requeridos por la ruta
    }),
  )


  await app.listen(3000);
}
bootstrap();
