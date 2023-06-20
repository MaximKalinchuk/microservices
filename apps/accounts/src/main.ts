import { NestFactory } from '@nestjs/core';
import { AccountsModule } from './modules/accounts.module';

async function bootstrap() {
  const app = await NestFactory.create(AccountsModule);
  await app.listen(3000);
}
bootstrap();
