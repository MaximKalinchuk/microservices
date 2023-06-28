import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { GroupsQueryRepository } from '../../infrastructure';

export class UpdateGroupsManagerFullnameCommand {
	id: string;
	constructor(id: string) {
		this.id = id;
	}
}
// @CommandHandler(UpdateGroupsManagerFullnameCommand)
// export class UpdateGroupsManagerFullnameUseCase implements ICommandHandler<UpdateGroupsManagerFullnameCommand> {
// 	constructor(private readonly groupsQueryRepository: GroupsQueryRepository) {}
// 	execute(command: UpdateGroupsManagerFullnameCommand): Promise<void> {
// 		await this.groupsQueryRepository.
// 	}
// }
