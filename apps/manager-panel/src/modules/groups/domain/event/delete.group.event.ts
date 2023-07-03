import { DeleteGroupReadServiceContract } from '@amqp/amqp-contracts/manager-panel/queues/delete.group.read-service.contract';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

export class DeleteGroupEvent {
	id: string;
	constructor(id: string) {
		this.id = id;
	}
}

@EventsHandler(DeleteGroupEvent)
export class DeleteGroupEventUseCase implements IEventHandler<DeleteGroupEvent> {
	constructor(private readonly amqpConnection: AmqpConnection) {}

	async handle(event: DeleteGroupEvent): Promise<void> {
		await this.amqpConnection.publish(
			DeleteGroupReadServiceContract.queue.exchange.name,
			DeleteGroupReadServiceContract.queue.routingKey,
			{
				payload: {
					id: event.id,
				},
			},
		);
	}
}
