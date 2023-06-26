import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateManagerInputModel } from '../../api/models/input/create.manager.input-model';
import { ManagerRepository } from '../../infrastructure/repositories/managers.repository';

export class CreateManagerCommand {
	id: string;
	email: string;
	passwordHash: string;
	fullName: string;
	constructor(dto: CreateManagerInputModel) {
		this.id = dto.id;
		this.email = dto.email;
		this.passwordHash = dto.password;
		this.fullName = dto.fullName;
	}
}

@CommandHandler(CreateManagerCommand)
export class CreateManagerUseCase implements ICommandHandler<CreateManagerCommand> {
	constructor(private readonly managerRepository: ManagerRepository) {}

	async execute(command: CreateManagerCommand): Promise<void> {
		await this.managerRepository.createManager(command);
	}
}
