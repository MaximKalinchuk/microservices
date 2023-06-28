import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { UpdateManagerFullnameInputModel } from '../../api/models/input/update.manager.fullname.input-model';
import { ManagersQueryRepository, ManagersRepository } from '../../infrastructure';
import { UpdateManagerFullnameViewModel } from '../../api/models/view/update.manager.fullname.view-model';
import { UpdateManagerFullnameEvent } from '../../domain/entity/events/update.manager.fullname.event';

export class UpdateManagerFullnameCommand {
	id: string;
	fullName: string;
	constructor(id: string, dto: UpdateManagerFullnameInputModel) {
		this.id = id;
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

	async execute(command: UpdateManagerFullnameCommand): Promise<UpdateManagerFullnameViewModel> {
		const manager = await this.managersQueryRepository.findManagerById(command.id);
		manager.updateFullname(command.fullName);
		await this.managersRepository.save(manager);

		await this.eventBus.publish(new UpdateManagerFullnameEvent(command));
		return {
			managerId: manager.id,
		};
	}
}
