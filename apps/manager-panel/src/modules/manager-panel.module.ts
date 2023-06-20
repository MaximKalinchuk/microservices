import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from '../config/typeorm.config';
import { GroupsModule } from './groups/groups.module';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [
		TypeOrmModule.forRootAsync(TypeOrmConfigService()),
		GroupsModule,
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: `envs/.manager.panel.env`,
		}),
	],
	controllers: [],
	providers: [],
	exports: [],
})
export class ManagerPanelModule {}
