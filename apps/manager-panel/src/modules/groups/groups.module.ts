import { Controller, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from '../../config/typeorm.config';
import { GroupEntity } from './domain/entity/group.entity';
import { GroupQueryRepository, GroupRepository } from './infrastructure';
import { CreateGroupUseCase } from './application/useCases/create.group.use-case';
import { GroupController } from './api/group.controller';
import { CqrsModule } from '@nestjs/cqrs';

const adapters = [GroupQueryRepository, GroupRepository];
const useCases = [CreateGroupUseCase];

@Module({
	imports: [CqrsModule, TypeOrmModule.forFeature([GroupEntity])],
	controllers: [GroupController],
	providers: [...adapters, ...useCases],
	exports: [],
})
export class GroupsModule {}
