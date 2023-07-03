import { Controller, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupEntity } from './domain/entity/group.entity';
import { GroupsQueryRepository, GroupRepository } from './infrastructure';
import { CreateGroupUseCase } from './application/useCases/create.group.use-case';
import { GroupController } from './api/group.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateGroupEventUseCase } from './domain/event/create.group.event';
import { ManagersModule } from '../managers/managers.module';
import { DeleteGroupUseCase } from './application/useCases/delete.group.use-case';
import { DeleteGroupEventUseCase } from './domain/event/delete.group.event';

const adapters = [GroupsQueryRepository, GroupRepository];
const useCases = [CreateGroupUseCase, DeleteGroupUseCase];
const eventUseCases = [CreateGroupEventUseCase, DeleteGroupEventUseCase];

@Module({
	imports: [CqrsModule, TypeOrmModule.forFeature([GroupEntity]), ManagersModule],
	controllers: [GroupController],
	providers: [...adapters, ...useCases, ...eventUseCases],
	exports: [],
})
export class GroupsModule {}
