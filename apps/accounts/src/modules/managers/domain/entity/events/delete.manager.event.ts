import { DeletManagerContract } from '@amqp/amqp-contracts/accounts/queues/delete.manager.contract';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

export class DeleteManagerEvent {
	id: string;
	constructor(id: string) {
		this.id = id;
	}
}

@EventsHandler(DeleteManagerEvent)
export class DeleteManagerEventUseCase implements IEventHandler<DeleteManagerEvent> {
	constructor(private readonly amqpConnection: AmqpConnection) {}

	async handle(event: DeleteManagerEvent): Promise<void> {
		await this.amqpConnection.publish(
			DeletManagerContract.queueReadService.exchange.name,
			DeletManagerContract.queueReadService.routingKey,
			{
				payload: {
					id: event.id,
				},
			},
		);
	}
}
