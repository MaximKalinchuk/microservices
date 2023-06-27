import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateManagerInputModel } from '../../api/models/input/create.manager.input-model';
import { ManagersRepository } from '../../infrastructure/managers.repository';
import { ManagersEntity } from '../../domain/entity/managers.entity';

export class CreateManagerCommand {
	id: string;
	email: string;
	passwordHash: string;
	fullName: string;
	constructor(dto: CreateManagerInputModel) {
		this.id = dto.id;
		this.email = dto.email;
		this.passwordHash = dto.passwordHash;
		this.fullName = dto.fullName;
	}
}

@CommandHandler(CreateManagerCommand)
export class CreateManagerUseCase implements ICommandHandler<CreateManagerCommand> {
	constructor(private readonly managersRepository: ManagersRepository) {}

	async execute(command: CreateManagerCommand): Promise<any> {
		const newManager = ManagersEntity.create(command);
		await this.managersRepository.save(newManager);
	}
}
