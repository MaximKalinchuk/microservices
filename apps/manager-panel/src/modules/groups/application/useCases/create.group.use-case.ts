import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { CreateGroupInputModel } from '../../api/models/input/create.group.input-model';
import { GroupRepository } from '../../infrastructure/group.repository';
import { GroupEntity } from '../../domain/entity/group.entity';
import { CreateGroupEvent } from '../../domain/event/create.group.event';
import { GroupsQueryRepository } from '../../infrastructure/group.query.repository';
import { ManagersQueryRepository } from '../../../managers/infrastructure';

export class CreateGroupCommand {
	groupName: string;
	creatorId: string;
	managerFullName: string;
	constructor(dto: CreateGroupInputModel) {
		this.groupName = dto.groupName;
		this.creatorId = dto.creatorId;
	}
}

@CommandHandler(CreateGroupCommand)
export class CreateGroupUseCase implements ICommandHandler<CreateGroupCommand> {
	constructor(
		private readonly groupRepository: GroupRepository,
		private readonly eventBus: EventBus,
		private readonly managersQueryRepository: ManagersQueryRepository,
	) {}
	async execute(command: CreateGroupCommand): Promise<void> {
		console.log(command.creatorId);
		const manager = await this.managersQueryRepository.findManagerById(command.creatorId);
		manager.fullName;

		const newGroup = GroupEntity.create(command, manager.fullName);
		await this.groupRepository.save(newGroup);
		await this.eventBus.publish(
			new CreateGroupEvent({
				id: newGroup.id,
				groupName: newGroup.groupName,
				managerFullName: newGroup.managerFullName,
				creatorId: newGroup.creatorId,
			}),
		);
	}
}
