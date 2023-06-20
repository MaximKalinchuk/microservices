import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManagersEntity } from './domain/entity/managers.entity';
import { ManagersEventController } from './api/managers.event.controller';
import { ManagersQueryRepository, ManagersRepository } from './infrastructure';
import { CreateManagerUseCase } from './application/useCases/create.manager.use-case';
import { CqrsModule } from '@nestjs/cqrs';
import { ProvidersModule } from '@providers/providers/providers.module';

const useCase = [CreateManagerUseCase];
const adapters = [ManagersQueryRepository, ManagersRepository];

@Module({
	imports: [CqrsModule, TypeOrmModule.forFeature([ManagersEntity]), ProvidersModule],
	controllers: [],
	providers: [...adapters, ...useCase, ManagersEventController],
	exports: [],
})
export class ManagersModule {}