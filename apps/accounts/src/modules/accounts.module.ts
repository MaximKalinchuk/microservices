import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from '../config/typeorm.config';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [
		UsersModule,
		TypeOrmModule.forRootAsync(TypeOrmConfigService()),
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: `envs/.accounts.env`,
		}),
	],
	controllers: [],
	providers: [],
})
export class AccountsModule {}
