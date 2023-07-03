import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateManagerInputModel } from '../../api/models/input/create.manager.input-model';
import { ManagersRepository } from '../../infrastructure/repositories/managers.repository';

export class CreateManagerCommand {
	id: string;
	email: string;
	passwordHash: string;
	fullName: string;
	created_At: string;
	updated_At: string;
	deleted_At: string | null;
	constructor(dto: CreateManagerInputModel) {
		this.id = dto.id;
		this.email = dto.email;
		this.passwordHash = dto.passwordHash;
		this.fullName = dto.fullName;
		this.created_At = dto.created_At;
		this.updated_At = dto.updated_At;
		this.deleted_At = dto.deleted_At;
	}
}

@CommandHandler(CreateManagerCommand)
export class CreateManagerUseCase implements ICommandHandler<CreateManagerCommand> {
	constructor(private readonly managerRepository: ManagersRepository) {}

	async execute(command: CreateManagerCommand): Promise<void> {
		await this.managerRepository.createManager(command);
	}
}
