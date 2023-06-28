import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { UpdateManagerFullnameInputModel } from '../../api/models/input/update.manager.fullname.input-model';
import { ManagersQueryRepository, ManagersRepository } from '../../infrastructure';
import { GroupsQueryRepository } from '../../../groups/infrastructure/group.query.repository';

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
	constructor(
		private readonly managersRepository: ManagersRepository,
		private readonly eventBus: EventBus,
		private readonly managersQueryRepository: ManagersQueryRepository,
	) {}

	async execute(command: UpdateManagerFullnameCommand): Promise<void> {
		const manager = await this.managersQueryRepository.findManagerById(command.id);
		manager.updateFullname(command.fullName);
		await this.managersRepository.save(manager);
	}
}
