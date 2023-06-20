import { InjectRepository } from '@nestjs/typeorm';
import { ManagersEntity } from '../domain/entity/managers.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ManagersQueryRepository {
	constructor(@InjectRepository(ManagersEntity) private readonly managersQueryRepository: Repository<ManagersEntity>) {}
}
