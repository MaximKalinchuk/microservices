import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateManagerInputModel } from '../../api/models/input/create.manager.input-model';
import { ManagersRepository } from '../../infrastructure/managers.repository';
import { ManagersEntity } from '../../domain/entity/managers.entity';

export class CreateManagerCommand {
	email: string;
	password: string;
	fullName: string;
	constructor(dto: CreateManagerInputModel) {
		this.email = dto.email;
		this.password = dto.password;
		this.fullName = dto.fullName;
	}
}

@CommandHandler(CreateManagerCommand)
export class CreateManagerUseCase implements ICommandHandler<CreateManagerCommand> {
	constructor(private readonly managersRepository: ManagersRepository, private readonly eventBus: EventBus) {}

	async execute(command: CreateManagerCommand): Promise<any> {
		const newManager = ManagersEntity.create(command);
		console.log(newManager);
		await this.managersRepository.save(newManager);
	}
}
