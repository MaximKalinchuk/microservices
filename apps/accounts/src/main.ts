import { NestFactory } from '@nestjs/core';
import { AccountsModule } from './modules/accounts.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
	const app = await NestFactory.create(AccountsModule);
	const port = new ConfigService().get('PORT') || 7001;
	await app.listen(port, () => {
		console.log(`Server started on port: ${port}`);
	});
}
bootstrap();
