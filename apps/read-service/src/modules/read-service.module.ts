import { Module } from '@nestjs/common';
import { ManagersModule } from './managers/managers.module';
import { ConfigModule } from '@nestjs/config';
import { GroupsModule } from './groups/groups.module';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConfig } from '../config/mongo.config';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: `envs/.read-service.env`,
		}),
		MongooseModule.forRootAsync(getMongoConfig()),
		ManagersModule,
		GroupsModule,
	],
	controllers: [],
	providers: [],
})
export class ReadServiceModule {}
