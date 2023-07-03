import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { GroupEntity } from '../domain/entity/group.entity';
import { MANAGER_PANEL_GROUP_EXEPTIONS } from '@constants/constants/manager-panel/group.exeprion';
import { group } from 'console';

@Injectable()
export class GroupsQueryRepository {
	constructor(@InjectRepository(GroupEntity) private readonly groupsQueryRepository: Repository<GroupEntity>) {}
	async checkGroupById(id: string) {
		const group = await this.groupsQueryRepository.findOne({ where: { id } });
		if (!group) {
			throw new NotFoundException(MANAGER_PANEL_GROUP_EXEPTIONS.GROUP_NOT_FOUND_404);
		}
		return group;
	}
}
