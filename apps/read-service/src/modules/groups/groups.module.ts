import { Module } from '@nestjs/common';
import { CreateGroupUseCase } from './application/useCases/create.group.use-case';
import { GroupEventController } from './api/group.event.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { ProvidersModule } from '@providers/providers/providers.module';
import { ConfigModule } from '@nestjs/config';

const adapters = [];
const useCases = [CreateGroupUseCase];

@Module({
	imports: [
		CqrsModule,
		ProvidersModule,
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: `envs/.read-service.env`,
		}),
	],
	controllers: [],
	providers: [...adapters, ...useCases, GroupEventController],
	exports: [],
})
export class GroupsModule {}
