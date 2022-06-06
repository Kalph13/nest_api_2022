import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

/* Class Validator & Class Transformer: npm install class-validator class-transformer */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* ValidationPipe & DTO (create-movie.dto): Prevent Bad Requests */
  /* whitelist & forbidNonWhitelisted: Forbid No-decoration-properties and Throw an Error*/
  /* transform: Change Input Types Automatically (e.g. getMovie(@Param('id') movieID: number) → String 'id' to Number 'movieID' */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
