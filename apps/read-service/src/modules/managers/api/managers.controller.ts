import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { GetManagerViewModel } from './models/view/get.manager.view-model';
import { ManagersQueryRepository } from '../infrastructure/repositories';

@Controller('managers')
export class ManagersController {
	constructor(private readonly managersQueryRepository: ManagersQueryRepository) {}

	@HttpCode(200)
	@Get()
	async getAllManagers(): Promise<GetManagerViewModel[]> {
		return await this.managersQueryRepository.findAllManagers();
	}

	@HttpCode(200)
	@Get(':id')
	async getManagerById(@Param('id') id: string): Promise<GetManagerViewModel> {
		return await this.managersQueryRepository.findManagerById(id);
	}
}
