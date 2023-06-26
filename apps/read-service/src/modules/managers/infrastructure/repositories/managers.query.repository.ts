import { InjectModel } from '@nestjs/mongoose';
import { Manager } from '../../domain/schema/managers.schema';
import { Model } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { READ_SERVICE_MANAGER_EXEPTIONS } from '@constants/constants/read-service-exceptions/manager.exeprions';
import { GetManagerViewModel } from '../../api/models/view/get.manager.view-model';

@Injectable()
export class ManagersQueryRepository {
	constructor(@InjectModel(Manager.name) private readonly managerQueryRepository: Model<Manager>) {}

	async findManager(id: string): Promise<GetManagerViewModel> {
		const manager = await this.managerQueryRepository.findOne({ id }).exec();
		if (!manager) {
			throw new BadRequestException(READ_SERVICE_MANAGER_EXEPTIONS.MANAGER_NOT_FOUND_404);
		}
		return {
			id: manager.id,
			email: manager.email,
			fullName: manager.fullName,
		};
	}
}
