import { Controller } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateManagerCommand } from '../application/useCases/create.manager.use-case';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { UpdateManagerFullnameReadServiceContract } from '@amqp/amqp-contracts/accounts/queues/update.manager.fullname.contracts';
import { UpdateManagerFullnameCommand } from '../application/useCases/update.manager.fullname.use-case';
import { CreateManagerReadServiceContract } from '@amqp/amqp-contracts/accounts/queues/create.manager.contracts';

@Controller('users')
export class ManagersEventController {
	constructor(private readonly commandBus: CommandBus) {}

	@RabbitSubscribe({
		exchange: CreateManagerReadServiceContract.queue.exchange.name,
		routingKey: CreateManagerReadServiceContract.queue.routingKey,
		queue: CreateManagerReadServiceContract.queue.queue,
	})
	async createManager(request: CreateManagerReadServiceContract.request) {
		const managerData = request.payload;
		console.log(managerData);
		await this.commandBus.execute(new CreateManagerCommand(managerData));
	}

	@RabbitSubscribe({
		exchange: UpdateManagerFullnameReadServiceContract.queue.exchange.name,
		routingKey: UpdateManagerFullnameReadServiceContract.queue.routingKey,
		queue: UpdateManagerFullnameReadServiceContract.queue.queue,
	})
	async updateManagerFullname(request: UpdateManagerFullnameReadServiceContract.request) {
		const managerData = request.payload;
		console.log(managerData);
		await this.commandBus.execute(new UpdateManagerFullnameCommand(managerData));
	}
}
