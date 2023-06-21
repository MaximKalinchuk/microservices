import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateManagerInputModel } from '../../api/models/input/create.manager.input-model';

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
	constructor() {}

	async execute(command: CreateManagerCommand): Promise<any> {}
}
