import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ManagersEntity } from '../../modules/managers/domain/entity/managers.entity';
import { GroupEntity } from '../../modules/groups/domain/entity/group.entity';

export const TypeOrmConfigService = (): TypeOrmModuleAsyncOptions => ({
	useFactory: (configService: ConfigService) => ({
		type: 'postgres',
		host: configService.get('PG_HOST'),
		port: +configService.get('PG_PORT'),
		username: configService.get('PG_USERNAME'),
		password: configService.get('PG_PASSWORD'),
		database: configService.get('PG_DATABASE'),
		entities: [ManagersEntity, GroupEntity],
		synchronize: false,
	}),
	inject: [ConfigService],
	imports: [ConfigModule],
});
