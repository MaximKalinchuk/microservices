import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CreateManagerInputModel } from '../../../api/models/input/create.manager.input-model';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { CreateManagerManagerPanelContract } from '@amqp/amqp-contracts/accounts/queues/accounts/create.manager.manager-panel.contract';

export class CreateManagerEvent {
	email: string;
	password: string;
	fullName: string;
	constructor(dto: CreateManagerInputModel) {
		this.email = dto.email;
		this.password = dto.password;
		this.fullName = dto.fullName;
	}
}

@EventsHandler(CreateManagerEvent)
export class CreateManagerEventUseCase implements IEventHandler<CreateManagerEvent> {
	constructor(private readonly amqpConnection: AmqpConnection) {}
	handle(event: CreateManagerEvent) {
		this.amqpConnection.publish(
			CreateManagerManagerPanelContract.queue.exchange.name,
			CreateManagerManagerPanelContract.queue.routingKey,
			{
				payload: { email: event.email, password: event.password, fullName: event.fullName },
			},
		);
	}
}
