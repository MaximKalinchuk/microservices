import { BaseRepository } from '@class/classes/entities';
import { ManagersEntity } from '../domain/entity/managers.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ManagersRepository extends BaseRepository<ManagersEntity> {
	constructor(
		@InjectRepository(ManagersEntity)
		private readonly managersRepository: Repository<ManagersEntity>,
	) {
		super(managersRepository);
	}
}
