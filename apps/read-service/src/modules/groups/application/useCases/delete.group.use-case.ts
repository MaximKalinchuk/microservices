import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { GroupsRepository } from '../../infrastructure';

export class DeleteGroupCommand {
	constructor(public id: string) {}
}

@CommandHandler(DeleteGroupCommand)
export class DeleteGroupUseCase implements ICommandHandler<DeleteGroupCommand> {
	constructor(private readonly groupsRepository: GroupsRepository) {}

	async execute(command: DeleteGroupCommand): Promise<void> {
		await this.groupsRepository.softDeleteGroup(command.id);
	}
}
