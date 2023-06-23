import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateGroupInputModel } from '../../api/models/input/create.group.input-model';

export class CreateGroupCommand {
	groupName: string;
	constructor(dto: CreateGroupInputModel) {
		this.groupName = dto.groupName;
	}
}

@CommandHandler(CreateGroupCommand)
export class CreateGroupUseCase implements ICommandHandler<CreateGroupCommand> {
	constructor() {}
	async execute(command: CreateGroupCommand): Promise<void> {
		console.log('command', command);
	}
}
