import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { ManagersQueryRepository, ManagersRepository } from '../../infrastructure';

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
	) {}

	async execute(command: DeleteManagerCommand): Promise<void> {
		await this.managersQueryRepository.findManagerById(command.id);
		await this.managersRepository.softDelete(command.id);
	}
}
