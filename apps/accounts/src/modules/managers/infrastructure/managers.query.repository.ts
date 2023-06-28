import { InjectRepository } from '@nestjs/typeorm';
import { ManagersEntity } from '../domain/entity/managers.entity';
import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { AGGOUNTS_MANAGER_EXEPTIONS } from '@constants/constants/accounts-exception/manager.exeption';

@Injectable()
export class ManagersQueryRepository {
	constructor(@InjectRepository(ManagersEntity) private readonly managersQueryRepository: Repository<ManagersEntity>) {}
	async findManagerById(id: string): Promise<ManagersEntity> {
		const manager = await this.managersQueryRepository.findOne({ where: { id } });

		if (!manager) {
			throw new NotFoundException(AGGOUNTS_MANAGER_EXEPTIONS.MANAGER_NOT_FOUND_404);
		}
		return manager;
	}

	async findManagerByEmail(email: string): Promise<ManagersEntity> {
		const manager = await this.managersQueryRepository.findOne({ where: { email } });
		return manager;
	}
}
