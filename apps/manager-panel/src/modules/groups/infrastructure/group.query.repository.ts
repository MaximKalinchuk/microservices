import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { GroupEntity } from '../domain/entity/group.entity';
import { MANAGER_PANEL_MANAGER_EXEPTIONS } from '@constants/constants/manager-panel/manager.exeption';

@Injectable()
export class GroupsQueryRepository {
	constructor(@InjectRepository(GroupEntity) private readonly groupsQueryRepository: Repository<GroupEntity>) {}
	// async getManagerById(id: string): Promise<GroupEntity> {
	// 	const manager = await this.groupsQueryRepository.findOne({ where: { id } });
	// 	console.log(manager);
	// 	if (!manager) {
	// 		throw new NotFoundException(MANAGER_PANEL_MANAGER_EXEPTIONS.MANAGER_NOT_FOUND_404);
	// 	}
	// 	return manager;
	// }
}
