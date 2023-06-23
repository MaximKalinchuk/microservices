import { InjectModel } from '@nestjs/mongoose';
import { Manager } from '../../domain/schema/managers.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { ManagerEntity } from '../../domain/entities/managers.entity';

@Injectable()
export class ManagerRepository {
	constructor(@InjectModel(Manager.name) private readonly managerRepository: Model<Manager>) {}

	async createManager(manager: ManagerEntity) {
		const newManager = new this.managerRepository(manager);
		return newManager.save();
	}

	async findManager(id: string) {
		return this.managerRepository.findOne({ id }).exec();
	}
}
