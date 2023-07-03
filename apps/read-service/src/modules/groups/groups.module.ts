import { Module } from '@nestjs/common';
import { CreateGroupUseCase } from './application/useCases/create.group.use-case';
import { GroupEventController } from './api/group.event.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { ProvidersModule } from '@providers/providers/providers.module';
import { ConfigModule } from '@nestjs/config';
import { GroupsQueryRepository, GroupsRepository } from './infrastructure';
import { MongooseModule } from '@nestjs/mongoose';
import { Group, GroupSchema } from './domain/schema/groups.schema';
import { GroupController } from './api/group.controller';
import { DeleteGroupUseCase } from './application/useCases/delete.group.use-case';

const adapters = [GroupsQueryRepository, GroupsRepository];
const useCases = [CreateGroupUseCase, DeleteGroupUseCase];

@Module({
	imports: [
		CqrsModule,
		ProvidersModule,
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: `envs/.read-service.env`,
		}),
		MongooseModule.forFeature([
			{
				name: Group.name,
				schema: GroupSchema,
			},
		]),
	],
	controllers: [GroupController],
	providers: [...adapters, ...useCases, GroupEventController],
	exports: [],
})
export class GroupsModule {}
