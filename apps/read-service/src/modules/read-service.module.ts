import { Module } from '@nestjs/common';
import { ManagersModule } from './managers/managers.module';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: `envs/.read-service.env`,
		}),
		ManagersModule,
	],
	controllers: [],
	providers: [],
})
export class ReadServiceModule {}
