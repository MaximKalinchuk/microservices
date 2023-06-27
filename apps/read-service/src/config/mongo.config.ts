import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';

export class MongoConnetion {
	static connect(): MongooseModuleAsyncOptions {
		const getMongoString = (configService: ConfigService) =>
			`mongodb://${configService.get('MONGO_LOGIN')}:${configService.get('MONGO_PASSWORD')}@${configService.get(
				'MONGO_HOST',
			)}:${configService.get('MONGO_PORT')}/${configService.get('MONGO_DATABASE')}?authSource=${configService.get(
				'MONGO_AUTHDATABASE',
			)}`;

		return {
			useFactory: (configService: ConfigService) => ({
				uri: getMongoString(configService),
			}),
			inject: [ConfigService],
			imports: [ConfigModule],
		};
		// ('mongodb://admin:admin@localhost:27017/read-service?authSource=admin');
	}
}
