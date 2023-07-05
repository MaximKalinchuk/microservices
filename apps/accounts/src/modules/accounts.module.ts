import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from '../config/database/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { ManagersModule } from './managers/managers.module';
import { ProvidersModule } from '@providers/providers/providers.module';

@Module({
	imports: [
		TypeOrmModule.forRootAsync(TypeOrmConfigService()),
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: `envs/.accounts.env`,
		}),
		ManagersModule,
		ProvidersModule,
	],
	controllers: [],
	providers: [],
})
export class AccountsModule {}
