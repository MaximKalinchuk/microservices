import { NestFactory } from '@nestjs/core';
import { ManagerPanelModule } from './modules/manager-panel.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
	const app = await NestFactory.create(ManagerPanelModule);
	const port = new ConfigService().get('PORT') || 7002;
	await app.listen(port, () => {
		console.log(`Server started on port: ${port}`);
	});
}
bootstrap();
