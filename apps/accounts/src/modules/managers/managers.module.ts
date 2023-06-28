import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManagersEntity } from './domain/entity/managers.entity';
import { ManagersController } from './api/managers.controller';
import { ManagersQueryRepository, ManagersRepository } from './infrastructure';
import { CreateManagerUseCase } from './application/useCases/create.manager.use-case';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateManagerEventUseCase } from './domain/entity/events/create.manager.event';
import { UpdateManagerFullnameUseCase } from './application/useCases/update.manager.fullname.use-case';
import { UpdateManagerFullnameEventUseCase } from './domain/entity/events/update.manager.fullname.event';

const eventUseCase = [UpdateManagerFullnameEventUseCase, CreateManagerEventUseCase];
const useCase = [CreateManagerUseCase, UpdateManagerFullnameUseCase];
const adapters = [ManagersQueryRepository, ManagersRepository];

@Module({
	imports: [CqrsModule, TypeOrmModule.forFeature([ManagersEntity])],
	controllers: [ManagersController],
	providers: [...adapters, ...useCase, ...eventUseCase],
	exports: [],
})
export class ManagersModule {}
