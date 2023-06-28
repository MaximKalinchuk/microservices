import { Controller, Get, Param } from '@nestjs/common';
import { GetGroupViewModel } from './models/view/get.group.view-model';
import { GroupsQueryRepository } from '../infrastructure/groups.query.repository';

@Controller('groups')
export class GroupController {
	constructor(private readonly groupsQueryRepository: GroupsQueryRepository) {}
	@Get(':id')
	async getGroup(@Param('id') id: string): Promise<GetGroupViewModel> {
		return await this.groupsQueryRepository.findGroupById(id);
	}
}
