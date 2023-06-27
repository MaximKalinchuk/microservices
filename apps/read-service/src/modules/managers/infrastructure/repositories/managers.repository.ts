import { InjectModel } from '@nestjs/mongoose';
import { Manager } from '../../domain/schema/managers.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateManagerInputModel } from '../../api/models/input/create.manager.input-model';

@Injectable()
export class ManagersRepository {
	constructor(@InjectModel(Manager.name) private readonly managersRepository: Model<Manager>) {}

	async createManager(manager: CreateManagerInputModel) {
		const newManager = new this.managersRepository(manager);
		return newManager.save();
	}

	async findManager(id: string) {
		return this.managersRepository.findOne({ id }).exec();
	}
}
