import { Controller, Body, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateGroupCommand } from '../application/useCases/create.group.use-case';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { CreateGroupReadServiceContract } from '@amqp/amqp-contracts/accounts/queues/manager-panel/create.group.read-service.contract';

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
}
