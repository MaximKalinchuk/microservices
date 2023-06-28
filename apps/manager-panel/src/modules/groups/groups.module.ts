import { Controller, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupEntity } from './domain/entity/group.entity';
import { GroupsQueryRepository, GroupRepository } from './infrastructure';
import { CreateGroupUseCase } from './application/useCases/create.group.use-case';
import { GroupController } from './api/group.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateGroupEventUseCase } from './domain/event/create.group.event';
import { ManagersModule } from '../managers/managers.module';

const adapters = [GroupsQueryRepository, GroupRepository];
const useCases = [CreateGroupUseCase, CreateGroupEventUseCase];

@Module({
	imports: [CqrsModule, TypeOrmModule.forFeature([GroupEntity]), ManagersModule],
	controllers: [GroupController],
	providers: [...adapters, ...useCases],
	exports: [],
})
export class GroupsModule {}
