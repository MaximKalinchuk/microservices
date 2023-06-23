import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CreateGroupInputModel } from '../../api/models/input/create.group.input-model';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { CreateGroupReadServiceContract } from '@amqp/amqp-contracts/accounts/queues/manager-panel/create.group.read-service.contract';

export class CreateGroupEvent {
	groupName: string;
	constructor(dto: CreateGroupInputModel) {
		this.groupName = dto.groupName;
	}
}

@EventsHandler(CreateGroupEvent)
export class CreateGroupEventUseCase implements IEventHandler<CreateGroupEvent> {
	constructor(private readonly amqpConnection: AmqpConnection) {}
	handle(event: CreateGroupEvent) {
		this.amqpConnection.publish(
			CreateGroupReadServiceContract.queue.exchange.name,
			CreateGroupReadServiceContract.queue.routingKey,
			{
				payload: { groupName: event.groupName },
			},
		);
	}
}
