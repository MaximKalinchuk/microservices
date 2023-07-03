import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateGroupInputModel } from '../../api/models/input/create.group.input-model';
import { GroupsRepository } from '../../infrastructure';

export class CreateGroupCommand {
	id: string;
	groupName: string;
	managerFullName: string;
	creatorId: string;
	created_At: string;
	updated_At: string;
	deleted_At: string;
	constructor(dto: CreateGroupInputModel) {
		this.id = dto.id;
		this.groupName = dto.groupName;
		this.managerFullName = dto.managerFullName;
		this.creatorId = dto.creatorId;
		this.created_At = dto.created_At;
		this.updated_At = dto.updated_At;
		this.deleted_At = dto.deleted_At;
	}
}

@CommandHandler(CreateGroupCommand)
export class CreateGroupUseCase implements ICommandHandler<CreateGroupCommand> {
	constructor(private readonly groupsRepository: GroupsRepository) {}
	async execute(command: CreateGroupCommand): Promise<void> {
		await this.groupsRepository.createGroup(command);
	}
}
