import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UpdateManagerFullnameInputModel } from './models/input/update.manager.event.input-model';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { UpdateManagerFullnameContract } from '@amqp/amqp-contracts/accounts/queues/update.manager.fullname.contracts';

export class UpdateManagerFullnameEvent {
	id: string;
	fullName: string;
	constructor(dto: UpdateManagerFullnameInputModel) {
		this.id = dto.id;
		this.fullName = dto.fullName;
	}
}

@EventsHandler(UpdateManagerFullnameEvent)
export class UpdateManagerFullnameEventUseCase implements IEventHandler<UpdateManagerFullnameEvent> {
	constructor(private readonly amqpConnection: AmqpConnection) {}
	async handle(event: UpdateManagerFullnameEvent): Promise<void> {
		await this.amqpConnection.publish(
			UpdateManagerFullnameContract.queueReadService.exchange.name,
			UpdateManagerFullnameContract.queueReadService.routingKey,
			{
				payload: { id: event.id, fullName: event.fullName },
			},
		);
	}
}
