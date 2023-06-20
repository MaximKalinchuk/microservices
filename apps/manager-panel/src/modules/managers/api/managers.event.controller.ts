import { Body, Controller, Post } from '@nestjs/common';
import { CreateManagerInputModel } from './models/input/create.manager.input-model';
import { CommandBus } from '@nestjs/cqrs';
import { CreateManagerCommand } from '../application/useCases/create.manager.use-case';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { CreateManagerContract } from '@amqp/amqp-contracts/accounts/queues/accounts/create.manager.contract';

@Controller('users')
export class ManagersEventController {
	constructor(private readonly commandBus: CommandBus) {}

	@RabbitSubscribe({
		exchange: CreateManagerContract.queue.exchange.name,
		routingKey: CreateManagerContract.queue.routingKey,
		queue: CreateManagerContract.queue.queue,
	})
	async createManager(request: CreateManagerContract.request) {
		console.log(request);
	}
}
