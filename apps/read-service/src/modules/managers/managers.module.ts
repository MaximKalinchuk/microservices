import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManagersEventController } from './api/managers.event.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { ProvidersModule } from '@providers/providers/providers.module';
import { CreateManagerUseCase } from './application/useCases/create.manager.use-case';

const useCase = [CreateManagerUseCase];
const adapters = [];

@Module({
	imports: [CqrsModule, ProvidersModule],
	controllers: [],
	providers: [...adapters, ...useCase, ManagersEventController],
	exports: [],
})
export class ManagersModule {}
