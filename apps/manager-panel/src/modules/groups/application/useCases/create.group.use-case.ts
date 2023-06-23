import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { CreateGroupInputModel } from '../../api/models/input/create.group.input-model';
import { GroupRepository } from '../../infrastructure/group.repository';
import { GroupEntity } from '../../domain/entity/group.entity';
import { CreateGroupEvent } from '../../domain/event/create.group.event';

export class CreateGroupCommand {
	groupName: string;
	constructor(dto: CreateGroupInputModel) {
		this.groupName = dto.groupName;
	}
}

@CommandHandler(CreateGroupCommand)
export class CreateGroupUseCase implements ICommandHandler<CreateGroupCommand> {
	constructor(private readonly groupRepository: GroupRepository, private readonly eventBus: EventBus) {}
	async execute(command: CreateGroupCommand): Promise<void> {
		const newGroup = GroupEntity.create(command);
		await this.groupRepository.save(newGroup);
		await this.eventBus.publish(new CreateGroupEvent(command));
	}
}
