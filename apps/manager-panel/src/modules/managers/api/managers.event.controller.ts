import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateManagerCommand } from '../application/useCases/create.manager.use-case';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { UpdateManagerFullnameContract } from '@amqp/amqp-contracts/accounts/queues/update.manager.fullname.contracts';
import { UpdateManagerFullnameCommand } from '../application/useCases/update.manager.fullname.use-case';
import { CreateManagerContract } from '@amqp/amqp-contracts/accounts/queues/create.manager.contracts';
import { DeletManagerContract } from '@amqp/amqp-contracts/accounts/queues/delete.manager.contract';
import { DeleteManagerCommand } from '../application/useCases/delete.manager.use-case';

@Controller('users')
export class ManagersEventController {
	constructor(private readonly commandBus: CommandBus) {}

	@RabbitSubscribe({
		exchange: CreateManagerContract.queueManagerPanel.exchange.name,
		routingKey: CreateManagerContract.queueManagerPanel.routingKey,
		queue: CreateManagerContract.queueManagerPanel.queue,
	})
	async createManager(request: CreateManagerContract.request) {
		const managerData = request.payload;
		console.log(managerData);
		await this.commandBus.execute(new CreateManagerCommand(managerData));
	}

	@RabbitSubscribe({
		exchange: UpdateManagerFullnameContract.queueManagerPanel.exchange.name,
		routingKey: UpdateManagerFullnameContract.queueManagerPanel.routingKey,
		queue: UpdateManagerFullnameContract.queueManagerPanel.queue,
	})
	async updateManagerFullname(request: UpdateManagerFullnameContract.request) {
		const managerData = request.payload;
		console.log(managerData);
		await this.commandBus.execute(new UpdateManagerFullnameCommand(managerData));
	}
	@RabbitSubscribe({
		exchange: DeletManagerContract.queueManagerPanel.exchange.name,
		routingKey: DeletManagerContract.queueManagerPanel.routingKey,
		queue: DeletManagerContract.queueManagerPanel.queue,
	})
	async deleteManager(request: DeletManagerContract.request) {
		const managerData = request.payload;
		await this.commandBus.execute(new DeleteManagerCommand(managerData.id));
	}
}
