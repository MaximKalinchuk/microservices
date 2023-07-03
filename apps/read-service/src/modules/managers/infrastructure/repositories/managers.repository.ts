import { InjectModel } from '@nestjs/mongoose';
import { Manager } from '../../domain/schema/managers.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateManagerInputModel } from '../../api/models/input/create.manager.input-model';

@Injectable()
export class ManagersRepository {
	constructor(@InjectModel(Manager.name) private readonly managersRepository: Model<Manager>) {}

	async createManager(manager: CreateManagerInputModel): Promise<void> {
		const newManager = new this.managersRepository(manager);
		newManager.save();
	}

	async updateManagerFullname(id: string, fullName: string): Promise<void> {
		const updated_At = new Date();
		await this.managersRepository.updateOne({ id }, { $set: { fullName, updated_At } }).exec();
	}

	async softDeleteManager(id: string): Promise<void> {
		const deleted_At = new Date();
		await this.managersRepository.updateOne({ id }, { $set: { deleted_At } }).exec();
	}
}
