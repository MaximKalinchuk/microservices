import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateGroupInputModel } from '../../api/models/input/create.group.input-model';
import { GroupsRepository } from '../../infrastructure';

export class CreateGroupCommand {
	id: string;
	groupName: string;
	managerFullName: string;
	creatorId: string;
	constructor(dto: CreateGroupInputModel) {
		this.id = dto.id;
		this.groupName = dto.groupName;
		this.managerFullName = dto.managerFullName;
		this.creatorId = dto.creatorId;
	}
}

@CommandHandler(CreateGroupCommand)
export class CreateGroupUseCase implements ICommandHandler<CreateGroupCommand> {
	constructor(private readonly groupsRepository: GroupsRepository) {}
	async execute(command: CreateGroupCommand): Promise<void> {
		console.log('command', command);
		await this.groupsRepository.createGroup(command);
	}
}
