import { NestFactory } from '@nestjs/core';
import { ReadServiceModule } from './modules/read-service.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
	const app = await NestFactory.create(ReadServiceModule);
	const port = new ConfigService().get('PORT') || 7003;
	await app.listen(port, () => {
		console.log(`Server started on port: ${port}`);
	});
}
bootstrap();
