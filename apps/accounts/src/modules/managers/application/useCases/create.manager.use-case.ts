import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateManagerInputModel } from '../../api/models/input/create.manager.input-model';
import { ManagersRepository } from '../../infrastructure/managers.repository';
import { ManagersEntity } from '../../domain/entity/managers.entity';
import { CreateManagerEvent } from '../../domain/entity/events/create.manager.event';
import { CreateManagerViewModel } from '../../api/models/view/create.manager.view-model';
import { BadRequestException } from '@nestjs/common';
import { AGGOUNTS_MANAGER_EXEPTIONS } from '@constants/constants/accounts-exception/manager.exeption';
import { ManagersQueryRepository } from '../../infrastructure';

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
	constructor(
		private readonly managersRepository: ManagersRepository,
		private readonly eventBus: EventBus,
		private readonly managersQueryRepository: ManagersQueryRepository,
	) {}

	async execute(command: CreateManagerCommand): Promise<CreateManagerViewModel> {
		const manager = await this.managersQueryRepository.findManagerByEmail(command.email);
		if (manager) {
			throw new BadRequestException(AGGOUNTS_MANAGER_EXEPTIONS.MANAGER_ALREADY_EXISTS_400);
		}

		const newManager = ManagersEntity.create(command);
		await this.managersRepository.save(newManager);
		const dto = {
			id: newManager.id,
			email: newManager.email,
			passwordHash: newManager.passwordHash,
			fullName: newManager.fullName,
			created_At: String(newManager.created_At),
			updated_At: String(newManager.updated_At),
			deleted_At: String(newManager.deleted_At),
		};
		await this.eventBus.publish(new CreateManagerEvent(dto));

		return {
			managerId: newManager.id,
		};
	}
}
