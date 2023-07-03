import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ManagersRepository } from '../../infrastructure/repositories';

export class DeleteManagerCommand {
	id: string;
	constructor(id: string) {
		this.id = id;
	}
}

@CommandHandler(DeleteManagerCommand)
export class DeleteManagerUseCase implements ICommandHandler<DeleteManagerCommand> {
	constructor(private readonly managerRepository: ManagersRepository) {}

	async execute(command: DeleteManagerCommand): Promise<void> {
		console.log('command');
		await this.managerRepository.softDeleteManager(command.id);
	}
}
