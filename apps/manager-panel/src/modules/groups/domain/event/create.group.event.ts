import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { CreateGroupReadServiceContract } from '@amqp/amqp-contracts/manager-panel/queues/create.group.read-service.contract';
import { CreateGroupEventInputModel } from './models/create.group.event.input-model';

export class CreateGroupEvent {
	id: string;
	groupName: string;
	managerFullName: string;
	creatorId: string;
	created_At: string;
	updated_At: string;
	deleted_At: string;
	constructor(dto: CreateGroupEventInputModel) {
		this.id = dto.id;
		this.groupName = dto.groupName;
		this.managerFullName = dto.managerFullName;
		this.creatorId = dto.creatorId;
		this.created_At = dto.created_At;
		this.updated_At = dto.updated_At;
		this.deleted_At = dto.deleted_At;
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
				payload: {
					id: event.id,
					groupName: event.groupName,
					managerFullName: event.managerFullName,
					creatorId: event.creatorId,
					created_At: event.created_At,
					updated_At: event.updated_At,
					deleted_At: event.deleted_At,
				},
			},
		);
	}
}
