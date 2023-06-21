import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CreateGroupInputModel } from '../../api/models/input/create.group.input-model';

export class CreateGroupEvent {
	groupName: string;
	constructor(dto: CreateGroupInputModel) {
		this.groupName = dto.groupName;
	}
}

@EventsHandler(CreateGroupEvent)
export class CreateGroupEventUseCase implements IEventHandler<CreateGroupEvent> {
	handle(event: CreateGroupEvent) {
		throw new Error('Method not implemented.');
	}
}
