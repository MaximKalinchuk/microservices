import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { ManagersQueryRepository, ManagersRepository } from '../../infrastructure';
import { BadRequestException } from '@nestjs/common';
import { AGGOUNTS_MANAGER_EXEPTIONS } from '@constants/constants/accounts-exception/manager.exeption';
import { DeleteManagerEvent } from '../../domain/entity/events/delete.manager.event';

export class DeleteManagerCommand {
	id: string;
	constructor(id: string) {
		this.id = id;
	}
}

@CommandHandler(DeleteManagerCommand)
export class DeleteManagerUseCase implements ICommandHandler<DeleteManagerCommand> {
	constructor(
		private readonly managersRepository: ManagersRepository,
		private readonly managersQueryRepository: ManagersQueryRepository,
		private readonly eventBus: EventBus,
	) {}

	async execute(command: DeleteManagerCommand): Promise<void> {
		await this.managersQueryRepository.findManagerById(command.id);
		await this.managersRepository.softDelete(command.id);

		await this.eventBus.publish(new DeleteManagerEvent(command.id));
	}
}
