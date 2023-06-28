import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateManagerFullnameInputModel } from '../../api/models/input/update.manager.fullname.input-model';
import { ManagersQueryRepository } from '../../infrastructure/repositories';
import { ManagersRepository } from '../../infrastructure/repositories/managers.repository';

export class UpdateManagerFullnameCommand {
	id: string;
	fullName: string;
	constructor(dto: UpdateManagerFullnameInputModel) {
		this.id = dto.id;
		this.fullName = dto.fullName;
	}
}

@CommandHandler(UpdateManagerFullnameCommand)
export class UpdateManagerFullnameUseCase implements ICommandHandler<UpdateManagerFullnameCommand> {
	constructor(private readonly managersRepository: ManagersRepository) {}
	async execute(command: UpdateManagerFullnameCommand): Promise<void> {
		await this.managersRepository.updateManagerFullname(command.id, command.fullName);
	}
}
