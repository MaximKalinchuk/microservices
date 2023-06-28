import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CreateManagerInputModel } from '../../../api/models/input/create.manager.input-model';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { CreateManagerEventInputModel } from './models/input/create.manager.event.input-model';
import { CreateManagerManagerPanelContract } from '@amqp/amqp-contracts/accounts/queues/create.manager.contracts';

export class CreateManagerEvent {
	id: string;
	email: string;
	passwordHash: string;
	fullName: string;
	constructor(dto: CreateManagerEventInputModel) {
		this.id = dto.id;
		this.email = dto.email;
		this.passwordHash = dto.passwordHash;
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
				payload: { id: event.id, email: event.email, passwordHash: event.passwordHash, fullName: event.fullName },
			},
		);
	}
}
