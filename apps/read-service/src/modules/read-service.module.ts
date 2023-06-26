import { Module } from '@nestjs/common';
import { ManagersModule } from './managers/managers.module';
import { ConfigModule } from '@nestjs/config';
import { GroupsModule } from './groups/groups.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConnetion } from '../config/mongo.config';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: `envs/.read-service.env`,
		}),
		MongooseModule.forRootAsync(MongoConnetion.connect()),
		ManagersModule,
		GroupsModule,
	],
	controllers: [],
	providers: [],
})
export class ReadServiceModule {}
