import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Group } from '../domain/schema/groups.schema';
import { CreateGroupInputModel } from '../api/models/input/create.group.input-model';

@Injectable()
export class GroupsRepository {
	constructor(@InjectModel(Group.name) private readonly groupsRepository: Model<Group>) {}

	async createGroup(group: CreateGroupInputModel): Promise<void> {
		const newManager = new this.groupsRepository(group);
		newManager.save();
	}

	async softDeleteGroup(id: string): Promise<void> {
		const deleted_At = new Date();
		await this.groupsRepository.updateOne({ id }, { $set: { deleted_At } }).exec();
	}
}
