import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CreateManagerInputModel } from '../../../api/models/input/create.manager.input-model';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { CreateManagerEventInputModel } from './models/input/create.manager.event.input-model';
import { CreateManagerContract } from '@amqp/amqp-contracts/accounts/queues/create.manager.contracts';

export class CreateManagerEvent {
	id: string;
	email: string;
	passwordHash: string;
	fullName: string;
	created_At: string;
	updated_At: string;
	deleted_At: string | null;
	constructor(dto: CreateManagerEventInputModel) {
		this.id = dto.id;
		this.email = dto.email;
		this.passwordHash = dto.passwordHash;
		this.fullName = dto.fullName;
		this.created_At = dto.created_At;
		this.updated_At = dto.updated_At;
		this.deleted_At = dto.deleted_At;
	}
}

@EventsHandler(CreateManagerEvent)
export class CreateManagerEventUseCase implements IEventHandler<CreateManagerEvent> {
	constructor(private readonly amqpConnection: AmqpConnection) {}
	async handle(event: CreateManagerEvent) {
		await this.amqpConnection.publish(
			CreateManagerContract.queueReadService.exchange.name,
			CreateManagerContract.queueReadService.routingKey,
			{
				payload: {
					id: event.id,
					email: event.email,
					passwordHash: event.passwordHash,
					fullName: event.fullName,
					created_At: event.created_At,
					updated_At: event.updated_At,
					deleted_At: event.deleted_At,
				},
			},
		);
	}
}
