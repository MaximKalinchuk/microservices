import { Module } from '@nestjs/common';
import { ManagersEventController } from './api/managers.event.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { ProvidersModule } from '@providers/providers/providers.module';
import { CreateManagerUseCase } from './application/useCases/create.manager.use-case';
import { MongooseModule } from '@nestjs/mongoose';
import { Manager, ManagerSchema } from './domain/schema/managers.schema';
import { ManagersRepository } from './infrastructure/repositories/managers.repository';
import { ManagersQueryRepository } from './infrastructure/repositories/managers.query.repository';
import { ManagersController } from './api/managers.controller';
import { UpdateManagerFullnameUseCase } from './application/useCases/update.manager.fullname.use-case';

const useCase = [CreateManagerUseCase, UpdateManagerFullnameUseCase];
const adapters = [ManagersRepository, ManagersQueryRepository];

@Module({
	imports: [
		CqrsModule,
		ProvidersModule,
		MongooseModule.forFeature([
			{
				name: Manager.name,
				schema: ManagerSchema,
			},
		]),
	],
	controllers: [ManagersController],
	providers: [...adapters, ...useCase, ManagersEventController],
	exports: [],
})
export class ManagersModule {}
