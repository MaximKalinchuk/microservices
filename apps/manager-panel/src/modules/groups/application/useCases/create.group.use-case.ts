import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateGroupInputModel } from '../../api/models/input/create.group.input-model';
import { GroupRepository } from '../../infrastructure/group.repository';
import { GroupEntity } from '../../domain/entity/group.entity';

export class CreateGroupCommand {
	groupName: string;
	constructor(dto: CreateGroupInputModel) {
		this.groupName = dto.groupName;
	}
}

@CommandHandler(CreateGroupCommand)
export class CreateGroupUseCase implements ICommandHandler<CreateGroupCommand> {
	constructor(private readonly groupRepository: GroupRepository) {}
	async execute(command: CreateGroupCommand): Promise<void> {
		console.log(command);
		const newGroup = GroupEntity.create(command);
		console.log(newGroup);
		await this.groupRepository.save(newGroup);
	}
}
