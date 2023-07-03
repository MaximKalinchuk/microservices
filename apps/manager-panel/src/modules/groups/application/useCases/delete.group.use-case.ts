import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { ManagersQueryRepository, ManagersRepository } from '../../../managers/infrastructure';
import { DeleteGroupEvent } from '../../domain/event/delete.group.event';
import { GroupRepository, GroupsQueryRepository } from '../../infrastructure';

export class DeleteGroupCommand {
	constructor(public id: string) {}
}

@CommandHandler(DeleteGroupCommand)
export class DeleteGroupUseCase implements ICommandHandler<DeleteGroupCommand> {
	constructor(
		private readonly groupsQueryRepository: GroupsQueryRepository,
		private readonly groupsRepository: GroupRepository,
		private readonly eventBus: EventBus,
	) {}
	async execute(command: DeleteGroupCommand): Promise<void> {
		await this.groupsQueryRepository.checkGroupById(command.id);
		await this.groupsRepository.softDelete(command.id);

		await this.eventBus.publish(new DeleteGroupEvent(command.id));
	}
}
