import { Controller } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateManagerCommand } from '../application/useCases/create.manager.use-case';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { CreateManagerReadServiceContract } from '@amqp/amqp-contracts/accounts/queues/accounts/create.manager.read-service.contract';

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
}
