import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Group } from '../domain/schema/groups.schema';
import { CreateGroupInputModel } from '../api/models/input/create.group.input-model';

@Injectable()
export class GroupsRepository {
	constructor(@InjectModel(Group.name) private readonly groupsRepository: Model<Group>) {}

	async createGroup(group: CreateGroupInputModel): Promise<void> {
		console.log(group);
		const newManager = new this.groupsRepository(group);
		newManager.save();
	}

	// async updateManager(id, fullName): Promise<void> {
	// 	await this.managersRepository.updateOne({ id }, { $set: { fullName } });
	// }
}
