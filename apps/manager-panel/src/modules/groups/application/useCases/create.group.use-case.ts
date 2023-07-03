import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { CreateGroupInputModel } from '../../api/models/input/create.group.input-model';
import { GroupRepository } from '../../infrastructure/group.repository';
import { GroupEntity } from '../../domain/entity/group.entity';
import { CreateGroupEvent } from '../../domain/event/create.group.event';
import { GroupsQueryRepository } from '../../infrastructure/group.query.repository';
import { ManagersQueryRepository } from '../../../managers/infrastructure';
import { CreateGroupViewModel } from '../../api/models/view/create.group.view-model';

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
	async execute(command: CreateGroupCommand): Promise<CreateGroupViewModel> {
		const manager = await this.managersQueryRepository.findManagerById(command.creatorId);
		manager.fullName;

		const newGroup = GroupEntity.create(command, manager.fullName);
		await this.groupRepository.save(newGroup);

		const dto = {
			id: newGroup.id,
			groupName: newGroup.groupName,
			managerFullName: newGroup.managerFullName,
			creatorId: newGroup.creatorId,
			created_At: String(newGroup.created_At),
			updated_At: String(newGroup.updated_At),
			deleted_At: String(newGroup.deleted_At),
		};

		await this.eventBus.publish(new CreateGroupEvent(dto));

		return {
			groupId: newGroup.id,
		};
	}
}
