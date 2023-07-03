import { Controller, Body, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateGroupCommand } from '../application/useCases/create.group.use-case';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { CreateGroupReadServiceContract } from '@amqp/amqp-contracts/manager-panel/queues/create.group.read-service.contract';
import { DeleteGroupReadServiceContract } from '@amqp/amqp-contracts/manager-panel/queues/delete.group.read-service.contract';
import { DeleteGroupCommand } from '../application/useCases/delete.group.use-case';

@Controller('groups')
export class GroupEventController {
	constructor(private readonly commandBus: CommandBus) {}
	@RabbitSubscribe({
		exchange: CreateGroupReadServiceContract.queue.exchange.name,
		routingKey: CreateGroupReadServiceContract.queue.routingKey,
		queue: CreateGroupReadServiceContract.queue.queue,
	})
	async createGroup(request: CreateGroupReadServiceContract.request): Promise<void> {
		const groupData = request.payload;
		await this.commandBus.execute(new CreateGroupCommand(groupData));
	}

	@RabbitSubscribe({
		exchange: DeleteGroupReadServiceContract.queue.exchange.name,
		routingKey: DeleteGroupReadServiceContract.queue.routingKey,
		queue: DeleteGroupReadServiceContract.queue.queue,
	})
	async deleteGroup(request: DeleteGroupReadServiceContract.request): Promise<void> {
		const groupData = request.payload;
		console.log(groupData);
		await this.commandBus.execute(new DeleteGroupCommand(groupData.id));
	}
}
