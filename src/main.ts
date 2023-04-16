import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2') // ruta por defecto antes de aplicar los endpoints

  await app.listen(3000);
}
bootstrap();
