import { Module } from '@nestjs/common';
import { CreateGroupUseCase } from './application/useCases/create.group.use-case';
import { GroupEventController } from './api/group.event.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { ProvidersModule } from '@providers/providers/providers.module';

const adapters = [];
const useCases = [CreateGroupUseCase];

@Module({
	imports: [CqrsModule, ProvidersModule],
	controllers: [],
	providers: [...adapters, ...useCases, GroupEventController],
	exports: [],
})
export class GroupsModule {}
