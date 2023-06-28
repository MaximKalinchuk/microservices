import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Group } from '../domain/schema/groups.schema';
import { GetGroupViewModel } from '../api/models/view/get.group.view-model';
import { READ_SERVICE_GROUP_EXEPTIONS } from '@constants/constants/read-service-exception/group.exeption';

@Injectable()
export class GroupsQueryRepository {
	constructor(@InjectModel(Group.name) private readonly groupsQueryRepository: Model<Group>) {}

	async findGroupById(id: string): Promise<GetGroupViewModel> {
		const group = await this.groupsQueryRepository.findOne({ id }).exec();
		if (!group) {
			throw new BadRequestException(READ_SERVICE_GROUP_EXEPTIONS.GROUP_NOT_FOUND_404);
		}
		return {
			id: group.id,
			groupName: group.groupName,
			managerFullName: group.managerFullName,
		};
	}
}
