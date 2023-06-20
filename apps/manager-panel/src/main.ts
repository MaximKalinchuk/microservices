import { NestFactory } from '@nestjs/core';
import { ManagerPanelModule } from './modules/manager-panel.module';

async function bootstrap() {
  const app = await NestFactory.create(ManagerPanelModule);
  await app.listen(3000);
}
bootstrap();
