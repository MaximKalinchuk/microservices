import { Module } from '@nestjs/common';
import { ManagersEventController } from './api/managers.event.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { ProvidersModule } from '@providers/providers/providers.module';
import { CreateManagerUseCase } from './application/useCases/create.manager.use-case';
import { MongooseModule } from '@nestjs/mongoose';
import { Manager, ManagerSchema } from './domain/schema/managers.schema';
import { ManagerRepository } from './infrastructure/repositories/managers.repository';

const useCase = [CreateManagerUseCase];
const adapters = [ManagerRepository];

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
	controllers: [],
	providers: [...adapters, ...useCase, ManagersEventController],
	exports: [],
})
export class ManagersModule {}
