import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateManagerCommand } from '../application/useCases/create.manager.use-case';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { UpdateManagerFullnameManagerPanelContract } from '@amqp/amqp-contracts/accounts/queues/update.manager.fullname.contracts';
import { UpdateManagerFullnameCommand } from '../application/useCases/update.manager.fullname.use-case';
import { CreateManagerManagerPanelContract } from '@amqp/amqp-contracts/accounts/queues/create.manager.contracts';
import { DeletManagerManagerPanelContract } from '@amqp/amqp-contracts/accounts/queues/delete.manager.contract';
import { DeleteManagerCommand } from '../application/useCases/delete.manager.use-case';

@Controller('users')
export class ManagersEventController {
	constructor(private readonly commandBus: CommandBus) {}

	@RabbitSubscribe({
		exchange: CreateManagerManagerPanelContract.queue.exchange.name,
		routingKey: CreateManagerManagerPanelContract.queue.routingKey,
		queue: CreateManagerManagerPanelContract.queue.queue,
	})
	async createManager(request: CreateManagerManagerPanelContract.request) {
		const managerData = request.payload;
		console.log(managerData);
		await this.commandBus.execute(new CreateManagerCommand(managerData));
	}

	@RabbitSubscribe({
		exchange: UpdateManagerFullnameManagerPanelContract.queue.exchange.name,
		routingKey: UpdateManagerFullnameManagerPanelContract.queue.routingKey,
		queue: UpdateManagerFullnameManagerPanelContract.queue.queue,
	})
	async updateManagerFullname(request: UpdateManagerFullnameManagerPanelContract.request) {
		const managerData = request.payload;
		console.log(managerData);
		await this.commandBus.execute(new UpdateManagerFullnameCommand(managerData));
	}
	@RabbitSubscribe({
		exchange: DeletManagerManagerPanelContract.queue.exchange.name,
		routingKey: DeletManagerManagerPanelContract.queue.routingKey,
		queue: DeletManagerManagerPanelContract.queue.queue,
	})
	async deleteManager(request: DeletManagerManagerPanelContract.request) {
		const managerData = request.payload;
		await this.commandBus.execute(new DeleteManagerCommand(managerData.id));
	}
}
