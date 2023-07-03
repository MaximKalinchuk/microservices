import { InjectModel } from '@nestjs/mongoose';
import { Manager } from '../../domain/schema/managers.schema';
import { Model } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { GetManagerViewModel } from '../../api/models/view/get.manager.view-model';
import { READ_SERVICE_MANAGER_EXEPTIONS } from '@constants/constants/read-service-exception/manager.exeptions';

@Injectable()
export class ManagersQueryRepository {
	constructor(@InjectModel(Manager.name) private readonly managerQueryRepository: Model<Manager>) {}

	async findManagerById(id: string): Promise<GetManagerViewModel> {
		const manager = await this.managerQueryRepository.findOne({ id }).exec();
		if (!manager || manager.deleted_At !== 'null') {
			throw new BadRequestException(READ_SERVICE_MANAGER_EXEPTIONS.MANAGER_NOT_FOUND_404);
		}
		return {
			id: manager.id,
			email: manager.email,
			fullName: manager.fullName,
			created_At: new Date(manager.created_At).toLocaleString(),
			updated_At: new Date(manager.updated_At).toLocaleString(),
		};
	}

	async findAllManagers(): Promise<GetManagerViewModel[]> {
		const managers = await this.managerQueryRepository.find();
		return this.buildAllManagers(managers);
	}

	buildAllManagers(managers: Manager[]) {
		const actualManagers = managers
			.filter((manager) => manager.deleted_At === 'null')
			.map((manager) => {
				return {
					id: manager.id,
					email: manager.email,
					fullName: manager.fullName,
					created_At: new Date(manager.created_At).toLocaleString(),
					updated_At: new Date(manager.updated_At).toLocaleString(),
				};
			});

		return actualManagers;
	}
}
